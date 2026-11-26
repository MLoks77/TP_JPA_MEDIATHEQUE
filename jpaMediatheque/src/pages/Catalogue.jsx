// composants
import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial';
import Filtre from '../composants/catalogue/filtre';

// icons
import { FaTrophy } from "react-icons/fa";

// api
import { useEffect, useMemo, useState } from "react";
import { getFilms, getGenres, getRealisateurs, getActeurs, getMediatheques } from "../services/api";
import { Link, useSearchParams } from 'react-router-dom'
import GSAPanimationApparition from "../hooks/GSAPanimationApparition";

export default function Catalogue() {
    // api
    const [films, setFilms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [realisateurs, setRealisateurs] = useState([]);
    const [acteurs, setActeurs] = useState([]);
    const [mediatheques, setMediatheques] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const ChoixMediatheque = searchParams.get("mediatheque") ?? "";
    const setChoixMediatheque = (idMediatheque) => {
        setSearchParams(idMediatheque ? { mediatheque: idMediatheque } : {}, { replace: true });
    };
    // recherche
    const [search, setSearch] = useState("");
    // genre selectionné
    const [ChoixGenre, setChoixGenre] = useState("");
    const [ChoixReal, setChoixReal] = useState("");
    const [ChoixActeur, setChoixActeur] = useState([]);
    const [plusieursRealisateurs, setPlusieursRealisateurs] = useState(false);
    const [trierParOscars, setTrierParOscars] = useState(false);

    useEffect(() => {
        Promise.all([getFilms(), getGenres(), getRealisateurs(), getActeurs(), getMediatheques()]).then(([filmsAPI, genresAPI, RealAPI, ActeurAPI, MediathequesAPI]) => {
            setFilms(filmsAPI);
            setGenres(genresAPI);
            setRealisateurs(RealAPI);
            setActeurs(ActeurAPI);
            setMediatheques(MediathequesAPI);

        });
    }, []);

    const mediathequeChoisie = mediatheques.find(
        (mediatheque) => String(mediatheque.id) === ChoixMediatheque
    );

    const filmsAffiches = useMemo(() => {
        const filmsFiltres = films.filter((film) => {
            const matchMediatheque = !ChoixMediatheque
                || String(film.mediatheque?.id) === ChoixMediatheque;
            const matchTitre = film.titre?.toLowerCase().includes(search.toLowerCase());
            const matchGenre = !ChoixGenre
                || film.genre?.some((genre) => genre.code === ChoixGenre);
            const matchRealisateur = !ChoixReal
                || film.realisateur?.some((realisateur) => String(realisateur.id) === ChoixReal);
            const matchActeur = ChoixActeur.length === 0
                || film.acteur?.some((acteur) =>
                    ChoixActeur.some((choisi) => choisi.code === acteur.code)
                );
            const matchPlusieursRealisateurs = !plusieursRealisateurs
                || (film.realisateur?.length ?? 0) > 1;
            return matchMediatheque && matchTitre && matchGenre && matchRealisateur && matchActeur
                && matchPlusieursRealisateurs;
        });

        return trierParOscars
            ? filmsFiltres.sort((filmA, filmB) => (filmB.nombreOscars ?? 0) - (filmA.nombreOscars ?? 0))
            : filmsFiltres;
    }, [films, ChoixMediatheque, search, ChoixGenre, ChoixReal, ChoixActeur, plusieursRealisateurs, trierParOscars]);

    const animApparition = GSAPanimationApparition(filmsAffiches);

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Catalogue" />
            <main className="min-h-screen bg-linear-to-r from-slate-900  to-slate-700">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">

                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className="dancing-script text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Catalogue
                        </h1>
                        <p className="mt-2 text-slate-300">
                            {mediathequeChoisie
                                ? `Découvrez les films disponibles à la ${mediathequeChoisie.nom}.`
                                : "Découvrez l'ensemble des films disponibles dans nos médiathèques."}
                        </p>
                    </header>

                    {/* filtres */}
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <Filtre
                            genres={genres}
                            realisateurs={realisateurs}
                            acteurs={acteurs}
                            mediatheques={mediatheques}
                            choixMediatheque={ChoixMediatheque}
                            setChoixMediatheque={setChoixMediatheque}
                            search={search}
                            setSearch={setSearch}
                            choixGenre={ChoixGenre}
                            setChoixGenre={setChoixGenre}
                            choixReal={ChoixReal}
                            setChoixReal={setChoixReal}
                            choixActeur={ChoixActeur}
                            setChoixActeur={setChoixActeur}
                            plusieursRealisateurs={plusieursRealisateurs}
                            setPlusieursRealisateurs={setPlusieursRealisateurs}
                            trierParOscars={trierParOscars}
                            setTrierParOscars={setTrierParOscars}
                            nombreFilms={filmsAffiches.length}
                        />

                        {/* films */}
                        <section
                            aria-label="Catalogue de films"
                            className="min-w-0 flex-1"
                        >
                            {filmsAffiches.length > 0 ? (
                                <div ref={animApparition} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                    {filmsAffiches.map((film) => (
                                        <Link
                                            key={film.id}
                                            to={`/film/${encodeURIComponent(film.id)}`} // encodeURIComponent remplace les caractères spéciaux si il y en a
                                            className="group opacity-0 flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
                                        >
                                            <div className="aspect-2/3 w-full overflow-hidden bg-slate-900">
                                                <img
                                                    src={film.imageURL}
                                                    alt={film.titre}
                                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <p className="p-2 text-sm font-medium text-white">
                                                {film.titre} {film.nombreOscars > 0 && (
                                                    <span className="gap-2 ml-2 inline-flex items-center rounded-full bg-yellow-600 px-2 py-0.5 text-xs font-semibold text-slate-900">
                                                        {film.nombreOscars} <FaTrophy />
                                                    </span>
                                                )}
                                            </p>
                                            <p className="p-2 text-sm font-light text-white">
                                                {film.genre.map((genre) => genre.libelle).join(", ")}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="rounded-xl border border-slate-600 bg-slate-900/40 p-6 text-slate-300">
                                    Aucun film ne correspond à ces filtres.
                                </p>
                            )}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}