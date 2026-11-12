package com.tp.mediatheque;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tp.mediatheque.model.Acteur;
import com.tp.mediatheque.model.Film;
import com.tp.mediatheque.model.Genre;
import com.tp.mediatheque.model.Realisateur;
import com.tp.mediatheque.repository.ActeurRepository;
import com.tp.mediatheque.repository.FilmRepository;
import com.tp.mediatheque.repository.GenreRepository;
import com.tp.mediatheque.repository.RealisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.InputStream;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initData(
            GenreRepository genreRepository,
            RealisateurRepository realisateurRepository,
            ActeurRepository acteurRepository,
            FilmRepository filmRepository) {
        return args -> {
            ObjectMapper mapper = new ObjectMapper();

            if (genreRepository.count() == 0) {
                InputStream is = TypeReference.class.getResourceAsStream("/genres.json");
                if (is != null) {
                    List<Genre> list = mapper.readValue(is, new TypeReference<List<Genre>>() {});
                    genreRepository.saveAll(list);
                }
            }

            if (realisateurRepository.count() == 0) {
                InputStream is = TypeReference.class.getResourceAsStream("/realisateurs.json");
                if (is != null) {
                    List<Realisateur> list = mapper.readValue(is, new TypeReference<List<Realisateur>>() {});
                    realisateurRepository.saveAll(list);
                }
            }

            if (acteurRepository.count() == 0) {
                InputStream is = TypeReference.class.getResourceAsStream("/acteurs.json");
                if (is != null) {
                    List<Acteur> list = mapper.readValue(is, new TypeReference<List<Acteur>>() {});
                    acteurRepository.saveAll(list);
                }
            }

            if (filmRepository.count() == 0) {
                InputStream is = TypeReference.class.getResourceAsStream("/films.json");
                if (is != null) {
                    List<Film> list = mapper.readValue(is, new TypeReference<List<Film>>() {});
                    filmRepository.saveAll(list);
                }
            }
        };
    }
}