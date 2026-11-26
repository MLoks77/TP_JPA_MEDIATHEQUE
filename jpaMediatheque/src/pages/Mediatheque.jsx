// composants
import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial'
import Revenir from '../composants/revenir'
//
import bg from "/images/filmbg.webp"
// react
import { Link, useParams } from 'react-router-dom';
// api
import { useEffect, useMemo, useState } from "react";
import { getMediathequeById } from "../services/api";
import GSAPanimationApparition from "../hooks/GSAPanimationApparition";

// retire les doublons d'une liste en se basant sur une clé (id, code...)
function sansDoublons(liste, cle) {
    const vus = new Map();
    liste.forEach((element) => {
        if (!vus.has(element[cle])) {
            vus.set(element[cle], element);
        }
    });
    return [...vus.values()];
}

export default function Mediatheque() {
    const { id } = useParams(); 

    // api : undefined = en cours de chargement, null = médiathèque introuvable
    const [mediatheque, setMediatheque] = useState(undefined);
    const [tirageGenre, setTirageGenre] = useState(0);

    useEffect(() => {
        getMediathequeById(id).then((mediathequeAPI) => {
            setMediatheque(mediathequeAPI);
            setTirageGenre(Math.random());
        });
    }, [id]);

    // tout est calculé à partir des films de CETTE médiathèque
    const films = useMemo(() => mediatheque?.films ?? [], [mediatheque]);

    const genres = useMemo(
        () => sansDoublons(films.flatMap((film) => film.genre ?? []), "code"),
        [films]
    );
    const realisateurs = useMemo(
        () => sansDoublons(films.flatMap((film) => film.realisateur ?? []), "id"),
        [films]
    );
    const acteurs = useMemo(
        () => sansDoublons(films.flatMap((film) => film.acteur ?? []), "code"),
        [films]
    );

    // réalisateur qui a réalisé le plus de films dans cette médiathèque

    const realisateurPlusDeFilms = useMemo(() => {
        const nbFilmsParRealisateur = new Map();
        films.forEach((film) => {
            (film.realisateur ?? []).forEach((realisateur) => {
                nbFilmsParRealisateur.set(realisateur.id, (nbFilmsParRealisateur.get(realisateur.id) ?? 0) + 1);
            });
        });

        // reduce permet de garder le réalisateur avec le plus de films dans la médiathèque
        // en cas d'égalité, on départage avec le nombre total de films réalisés
        return realisateurs.reduce((meilleur, realisateur) => {
            const nb = nbFilmsParRealisateur.get(realisateur.id);
            const nbMeilleur = meilleur ? nbFilmsParRealisateur.get(meilleur.id) : -1;
            if (!meilleur || nb > nbMeilleur
                || (nb === nbMeilleur && realisateur.nbrFilmsRealises > meilleur.nbrFilmsRealises)) {
                return { ...realisateur, nbFilmsMediatheque: nb };
            }
            return meilleur;
        }, null);
    }, [films, realisateurs]);

    // Film + oscars

    const filmsPlusOscars = useMemo(
        () => [...films]
            .filter((film) => film.nombreOscars > 0)
            .sort((filmA, filmB) => filmB.nombreOscars - filmA.nombreOscars)
            .slice(0, 3),
        [films]
    );

    // pour proposer des films aux genres randoms (parmi les genres présents dans la médiathèque)

    const genreRandom = useMemo(
        () => genres.length > 0
            ? genres[Math.floor(tirageGenre * genres.length)]
            : null,
        [genres, tirageGenre]
    );

    const genresFilm = useMemo(
        () => genreRandom
            ? films
                .filter((film) => film.genre?.some((genre) => genre.code === genreRandom.code))
                .slice(0, 3)
            : [],
        [films, genreRandom]
    );
    const genresFilmRef = GSAPanimationApparition(genresFilm);
    const filmsPlusOscarsRef = GSAPanimationApparition(filmsPlusOscars);

    // médiathèque introuvable
    if (mediatheque === null) {
        return (
            <section>
                <Navbar />
                <Filarial titrePage="Médiathèques" />
                <main className="min-h-screen bg-linear-to-r from-slate-900 to-slate-700">
                    <section className="p-4 max-w-7xl w-full mx-auto space-y-6">
                        <Revenir destination="/mediatheques" texte="aux médiathèques" />
                        <p className="rounded-xl border border-slate-600 bg-slate-900/40 p-6 text-slate-300">
                            Cette médiathèque n'existe pas.
                        </p>
                    </section>
                </main>
                <Footer />
            </section>
        )
    }

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Médiathèques" titresuite={mediatheque?.nom} />
            <main className="min-h-screen bg-linear-to-r from-slate-900 to-slate-700">
                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/mediatheques" texte="aux médiathèques" />
                </section>

                <section className="mx-auto w-full max-w-7xl px-6">
                    <div className="relative h-80 md:h-112.5 w-full overflow-hidden rounded-xl mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                        <img
                            src={bg}
                            alt="Landing"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white gap-5">
                            <h1 className="dancing-script text-5xl md:text-6xl font-bold mb-2">{mediatheque?.nom}</h1>
                            {mediatheque && (
                                <p className="text-lg text-slate-200">
                                    {mediatheque.adresse}, {mediatheque.ville} · {films.length} film{films.length !== 1 ? "s" : ""}
                                </p>
                            )}
                            <Link
                                to={`/catalogue?mediatheque=${encodeURIComponent(id)}`}
                                className="dancing-script rounded-xl bg-white px-6 py-3 text-3xl font-semibold text-slate-900 transition duration-300 hover:bg-slate-200 shadow-lg"
                            >
                                Explorer ses films
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14 flex flex-col lg:flex-row gap-10">

                    {/* Section 1 : Par genre */}
                    <div className="flex-1 min-w-0">

                        <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                            <h1 className=" text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                                Découvrez par genre : {genreRandom?.libelle ?? ""}
                            </h1>
                        </header>

                        <div
                            ref={genresFilmRef}
                            className="flex flex-wrap justify-center sm:justify-start gap-4"
                        >
                            {genresFilm.map((film) => (
                                <Link
                                    key={film.id}
                                    to={`/film/${encodeURIComponent(film.id)}`}
                                    className="opacity-0 group flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white w-44 shrink-0"
                                >
                                    <div className="aspect-2/3 w-full overflow-hidden bg-slate-900 h-52">
                                        <img
                                            src={film.imageURL}
                                            alt={film.titre}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="p-2.5 text-xs font-medium text-white truncate">
                                        {film.titre}
                                    </p>
                                    <span className="px-2.5 pb-2.5 text-[10px] text-slate-300 truncate">
                                        {film.genre?.map((genre) => genre.libelle).join(", ")}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Section 2 : Plus d'oscars */}
                    <div className="flex-1 min-w-0">

                        <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                            <h1 className=" text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                                Nos 3 films avec le plus d'oscars
                            </h1>
                        </header>

                        {mediatheque && filmsPlusOscars.length === 0 && (
                            <p className="text-slate-300">Aucun film oscarisé dans cette médiathèque.</p>
                        )}

                        <div
                            ref={filmsPlusOscarsRef}
                            className="flex flex-wrap justify-center sm:justify-start gap-4"
                        >
                            {filmsPlusOscars.map((film) => (
                                <Link
                                    key={film.id}
                                    to={`/film/${encodeURIComponent(film.id)}`}
                                    className="opacity-0 group flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white w-44 shrink-0"
                                >
                                    <div className="aspect-2/3 w-full overflow-hidden bg-slate-900 h-52">
                                        <img
                                            src={film.imageURL}
                                            alt={film.titre}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="p-2.5 text-xs font-medium text-white truncate">
                                        {film.titre}
                                    </p>
                                    <p className="px-2.5 pb-2.5 text-[10px] font-bold uppercase text-slate-300">
                                        {film.nombreOscars} Oscar{film.nombreOscars !== 1 ? "s" : ""}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">

                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className=" text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Les réalisateurs de cette médiathèque
                        </h1>
                    </header>

                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-600">
                        {realisateurs.map((realisateur) => (
                            <Link key={realisateur.id} to={`/profil/realisateur/${realisateur.id}`}>
                                <div className="group flex flex-col items-center text-center shrink-0 w-28">
                                    <img
                                        src={realisateur.imageURL}
                                        alt={`${realisateur.prenom} ${realisateur.nom}`}
                                        className="group-hover:border-white border-4 transform-all duration-200 w-24 h-24 rounded-full object-cover shadow-md mb-2"
                                    />
                                    <h2 className="text-sm font-semibold text-white truncate w-full">{realisateur.prenom} {realisateur.nom}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* reals. + real. avec le plus de films */}
                {realisateurPlusDeFilms && (
                    <section className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 gap-5 pb-10">
                        <div className="flex-1 flex flex-col items-center justify-center p-8 h-auto rounded-lg min-h-87.5">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-slate-600 bg-slate-700 flex items-center justify-center">
                                {realisateurPlusDeFilms.imageURL && (
                                    <img
                                        src={realisateurPlusDeFilms.imageURL}
                                        alt={`${realisateurPlusDeFilms.prenom} ${realisateurPlusDeFilms.nom}`}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>


                        <div className="flex-1 flex flex-col justify-center p-8 h-auto rounded-lg min-h-87.5 text-white space-y-4">
                            <h1 className="text-2xl md:text-3xl font-bold border-b border-slate-600 pb-3">
                                Le réalisateur avec le plus de films
                            </h1>
                            <div className="space-y-2 text-slate-300">
                                <p className="text-xl font-semibold text-white">
                                    {realisateurPlusDeFilms.prenom} {realisateurPlusDeFilms.nom}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-400">Nationalité :</span> {realisateurPlusDeFilms.nationalite}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-400">Films dans cette médiathèque :</span> {realisateurPlusDeFilms.nbFilmsMediatheque}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-400">Films réalisés au total :</span> {realisateurPlusDeFilms.nbrFilmsRealises}
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-400">Email :</span> {realisateurPlusDeFilms.email}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/*listes acteurs*/}
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">

                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className=" text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Les acteurs de cette médiathèque
                        </h1>
                    </header>

                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-600">
                        {acteurs.map((acteur) => (
                            <Link key={acteur.code} to={`/profil/acteur/${acteur.code}`}>
                                <div className="group flex flex-col items-center text-center shrink-0 w-28">
                                    <img
                                        src={acteur.imageURL}
                                        alt={`${acteur.prenom} ${acteur.nom}`}
                                        className="group-hover:border-white border-4 transform-all duration-200 w-24 h-24 rounded-full object-cover shadow-md mb-2"
                                    />
                                    <h2 className="text-sm font-semibold text-white truncate w-full">{acteur.prenom} {acteur.nom}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </main>
            <Footer />
        </section>
    )
}
