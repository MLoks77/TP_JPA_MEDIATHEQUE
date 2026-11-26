// J'ai demandé à une IA de rédiger ce code pour pouvoir importer les json dans ressource

package com.tp.mediatheque;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp.mediatheque.model.Acteur;
import com.tp.mediatheque.model.Film;
import com.tp.mediatheque.model.Genre;
import com.tp.mediatheque.model.Mediatheque;
import com.tp.mediatheque.model.Realisateur;
import com.tp.mediatheque.repository.ActeurRepository;
import com.tp.mediatheque.repository.FilmRepository;
import com.tp.mediatheque.repository.GenreRepository;
import com.tp.mediatheque.repository.MediathequeRepository;
import com.tp.mediatheque.repository.RealisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final GenreRepository genreRepository;
    private final RealisateurRepository realisateurRepository;
    private final ActeurRepository acteurRepository;
    private final FilmRepository filmRepository;
    private final MediathequeRepository mediathequeRepository;

    public DataInitializer(
            GenreRepository genreRepository,
            RealisateurRepository realisateurRepository,
            ActeurRepository acteurRepository,
            FilmRepository filmRepository,
            MediathequeRepository mediathequeRepository) {
        this.genreRepository = genreRepository;
        this.realisateurRepository = realisateurRepository;
        this.acteurRepository = acteurRepository;
        this.filmRepository = filmRepository;
        this.mediathequeRepository = mediathequeRepository;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void run(String... args) throws IOException {
        Map<String, Genre> genresByCode = seedAndLoad(
                genreRepository,
                readList("/genres.json", Genre.class),
                Genre::getCode,
                "genre");
        Map<Long, Realisateur> realisateursBySourceId = seedDirectors(
                readList("/realisateurs.json", Realisateur.class));
        Map<String, Acteur> acteursByCode = seedAndLoad(
                acteurRepository,
                readList("/acteurs.json", Acteur.class),
                Acteur::getCode,
                "acteur");
        Map<Long, Mediatheque> mediathequesBySourceId = seedMediatheques(
                readList("/mediatheques.json", Mediatheque.class));

        List<Film> films = readList("/films.json", Film.class);
        indexById(films, Film::getId, "film JSON");

        if (filmRepository.count() != 0) {
            // Base déjà remplie avant l'ajout des médiathèques : on rattache les films qui n'en ont pas encore
            assignMissingMediatheques(films, mediathequesBySourceId);
            return;
        }

        for (Film film : films) {
            film.setMediatheque(resolveMediatheque(
                    film.getMediatheque(), mediathequesBySourceId, film.getTitre()));
            film.setGenre(resolveReferences(
                    film.getGenre(), Genre::getCode, genresByCode, "genre", film.getTitre()));
            film.setRealisateur(resolveReferences(
                    film.getRealisateur(), Realisateur::getId, realisateursBySourceId, "réalisateur", film.getTitre()));
            film.setActeur(resolveReferences(
                    film.getActeur(), Acteur::getCode, acteursByCode, "acteur", film.getTitre()));
            film.setId(null);
        }
        filmRepository.saveAll(films);
    }

    private <T> List<T> readList(String resourcePath, Class<T> itemType) throws IOException {
        InputStream resource = getClass().getResourceAsStream(resourcePath);
        if (resource == null) {
            throw new IllegalStateException("Ressource JSON introuvable : " + resourcePath);
        }

        try (InputStream input = resource) {
            JavaType listType = objectMapper.getTypeFactory()
                    .constructCollectionType(List.class, itemType);
            List<T> items = objectMapper.readValue(input, listType);
            if (items == null) {
                throw new IllegalStateException("La ressource JSON ne contient pas de liste : " + resourcePath);
            }
            return items;
        }
    }

    private Map<Long, Realisateur> seedDirectors(List<Realisateur> source) {
        Map<Long, Realisateur> sourceById = indexById(source, Realisateur::getId, "réalisateur JSON");
        Map<String, Realisateur> existingByName = indexDirectorsByName(realisateurRepository.findAll());
        Map<Long, Realisateur> directorsBySourceId = new HashMap<>();

        for (Map.Entry<Long, Realisateur> entry : sourceById.entrySet()) {
            Realisateur sourceDirector = entry.getValue();
            String nameKey = directorNameKey(sourceDirector);
            Realisateur director = existingByName.get(nameKey);
            if (director == null) {
                sourceDirector.setId(null);
                director = realisateurRepository.save(sourceDirector);
                if (director.getId() == null) {
                    throw new IllegalStateException(
                            "L'identifiant du réalisateur n'a pas été créé : " + nameKey);
                }
                existingByName.put(nameKey, director);
            }
            directorsBySourceId.put(entry.getKey(), director);
        }
        return directorsBySourceId;
    }

    // Les id des médiathèques sont générés par la base : on les reconnaît par leur nom
    // et on garde la correspondance id du JSON -> médiathèque en base
    private Map<Long, Mediatheque> seedMediatheques(List<Mediatheque> source) {
        Map<Long, Mediatheque> sourceById = indexById(source, Mediatheque::getId, "médiathèque JSON");
        Map<String, Mediatheque> existingByName = new HashMap<>();
        for (Mediatheque mediatheque : mediathequeRepository.findAll()) {
            existingByName.putIfAbsent(mediathequeNameKey(mediatheque), mediatheque);
        }

        Map<Long, Mediatheque> mediathequesBySourceId = new HashMap<>();
        for (Map.Entry<Long, Mediatheque> entry : sourceById.entrySet()) {
            Mediatheque sourceMediatheque = entry.getValue();
            String nameKey = mediathequeNameKey(sourceMediatheque);
            Mediatheque mediatheque = existingByName.get(nameKey);
            if (mediatheque == null) {
                sourceMediatheque.setId(null);
                mediatheque = mediathequeRepository.save(sourceMediatheque);
                existingByName.put(nameKey, mediatheque);
            }
            mediathequesBySourceId.put(entry.getKey(), mediatheque);
        }
        return mediathequesBySourceId;
    }

    private String mediathequeNameKey(Mediatheque mediatheque) {
        if (mediatheque.getNom() == null || mediatheque.getNom().isBlank()) {
            throw new IllegalStateException("Nom manquant pour une médiathèque");
        }
        return mediatheque.getNom().trim().toLowerCase(Locale.ROOT);
    }

    private Mediatheque resolveMediatheque(
            Mediatheque reference,
            Map<Long, Mediatheque> mediathequesBySourceId,
            String filmTitle) {
        if (reference == null || reference.getId() == null) {
            throw new IllegalStateException("Médiathèque absente pour le film : " + filmTitle);
        }
        Mediatheque mediatheque = mediathequesBySourceId.get(reference.getId());
        if (mediatheque == null) {
            throw new IllegalStateException(
                    "Médiathèque introuvable pour le film " + filmTitle + " : " + reference.getId());
        }
        return mediatheque;
    }

    // Rattache les films déjà en base (sans médiathèque) en les retrouvant par leur titre dans films.json
    private void assignMissingMediatheques(
            List<Film> sourceFilms,
            Map<Long, Mediatheque> mediathequesBySourceId) {
        Map<String, Mediatheque> mediathequeByTitle = new HashMap<>();
        for (Film sourceFilm : sourceFilms) {
            mediathequeByTitle.put(
                    sourceFilm.getTitre(),
                    resolveMediatheque(sourceFilm.getMediatheque(), mediathequesBySourceId, sourceFilm.getTitre()));
        }

        List<Film> updated = new ArrayList<>();
        for (Film film : filmRepository.findAll()) {
            Mediatheque mediatheque = mediathequeByTitle.get(film.getTitre());
            if (film.getMediatheque() == null && mediatheque != null) {
                film.setMediatheque(mediatheque);
                updated.add(film);
            }
        }
        filmRepository.saveAll(updated);
    }

    private Map<String, Realisateur> indexDirectorsByName(List<Realisateur> directors) {
        Map<String, Realisateur> directorsByName = new HashMap<>();
        for (Realisateur director : directors) {
            String nameKey = directorNameKey(director);
            if (directorsByName.putIfAbsent(nameKey, director) != null) {
                throw new IllegalStateException("Réalisateur dupliqué en base : " + nameKey);
            }
        }
        return directorsByName;
    }

    private String directorNameKey(Realisateur director) {
        if (director.getNom() == null || director.getNom().isBlank()
                || director.getPrenom() == null || director.getPrenom().isBlank()) {
            throw new IllegalStateException("Nom ou prénom manquant pour un réalisateur");
        }
        return director.getNom().trim().toLowerCase(Locale.ROOT)
                + "|" + director.getPrenom().trim().toLowerCase(Locale.ROOT);
    }

    private <T, ID> Map<ID, T> seedAndLoad(
            JpaRepository<T, ID> repository,
            List<T> source,
            Function<T, ID> idGetter,
            String entityName) {
        Map<ID, T> sourceById = indexById(source, idGetter, entityName + " JSON");
        for (Map.Entry<ID, T> entry : sourceById.entrySet()) {
            if (!repository.existsById(entry.getKey())) {
                T saved = repository.save(entry.getValue());
                ID savedId = idGetter.apply(saved);
                if (!Objects.equals(entry.getKey(), savedId)) {
                    throw new IllegalStateException(
                            "L'identifiant du " + entityName + " a changé pendant l'initialisation : "
                                    + entry.getKey() + " -> " + savedId);
                }
            }
        }
        return indexById(repository.findAll(), idGetter, entityName + " en base");
    }

    private <T, ID> Map<ID, T> indexById(
            List<T> entities,
            Function<T, ID> idGetter,
            String sourceName) {
        Map<ID, T> entitiesById = new HashMap<>();
        for (T entity : entities) {
            ID id = idGetter.apply(entity);
            if (id == null) {
                throw new IllegalStateException("Identifiant manquant dans " + sourceName);
            }
            if (entitiesById.putIfAbsent(id, entity) != null) {
                throw new IllegalStateException("Identifiant dupliqué dans " + sourceName + " : " + id);
            }
        }
        return entitiesById;
    }

    private <T, ID> List<T> resolveReferences(
            List<T> references,
            Function<T, ID> idGetter,
            Map<ID, T> entitiesById,
            String entityName,
            String filmTitle) {
        if (references == null) {
            throw new IllegalStateException(
                    "La liste de " + entityName + " est absente pour le film : " + filmTitle);
        }

        List<T> resolved = new ArrayList<>(references.size());
        for (T reference : references) {
            if (reference == null) {
                throw new IllegalStateException(
                        "Référence de " + entityName + " vide pour le film : " + filmTitle);
            }
            ID id = idGetter.apply(reference);
            T entity = entitiesById.get(id);
            if (id == null || entity == null) {
                throw new IllegalStateException(
                        "Référence de " + entityName + " introuvable pour le film "
                                + filmTitle + " : " + id);
            }
            resolved.add(entity);
        }
        return resolved;
    }
}
