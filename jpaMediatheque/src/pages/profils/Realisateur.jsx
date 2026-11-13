// api
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFilms, getRealisateursById } from "../../services/api";
// composant 
import Revenir from "../../composants/revenir";
import Filarial from "../../composants/filarial";
import Navbar from "../../composants/navbar";
import Footer from "../../composants/footer";
import GSAPanimationApparition from "../../hooks/GSAPanimationApparition";

export default function Realisateur() {
    const { id } = useParams(); // utilise les params du router/url ( realisateur/:id ), il utilise donc :id

    const [realisateur, setRealisateur] = useState({});
    const [films, setFilms] = useState([]);

    useEffect(() => {
        Promise.all([getRealisateursById(id), getFilms()]).then(([realisateurAPI, filmsAPI]) => {
            setRealisateur(realisateurAPI ?? {});
            setFilms(filmsAPI);
        });
    }, [id]);

    {/* les films du réalisateur */}
    const filmsRealisateur = useMemo(
        () => films.filter((film) =>
            film.realisateur?.some((realisateurLie) => String(realisateurLie.id) === id)
        ),
        [films, id]
    );
    const filmsRealisateurRef = GSAPanimationApparition(filmsRealisateur);

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Réalisateur" />
            <main className="min-h-screen bg-linear-to-r from-slate-900  to-slate-700">

                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/mediatheque" texte="à la médiathèque" />
                </section>

                {/* infos du réalisateur */}
                <section className="max-w-7xl w-full mx-auto p-6 text-white">
                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        {realisateur.imageURL && (
                            <img
                                src={realisateur.imageURL}
                                alt={`${realisateur.prenom} ${realisateur.nom}`}
                                className="w-full md:w-80 lg:w-96 h-120 md:h-auto rounded-xl shadow-2xl object-cover shrink-0"
                            />
                        )}

                        <div className="flex-1 space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold">{realisateur.prenom} {realisateur.nom}</h1>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-slate-300 border-t border-slate-700">
                                    <p>
                                        <span className="font-semibold text-white">Nationalité :</span> {realisateur.nationalite}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Films réalisés :</span> {realisateur.nbrFilmsRealises}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Email :</span> {realisateur.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="p-4 mt-10 max-w-7xl mx-auto border-slate-600 opacity-70" />

                {/*participation dans les films*/}
                <section className="mx-auto w-full max-w-7xl px-6 pt-6 pb-15">
                    <header className="mb-8 text-left">
                        <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                            Films réalisés par {realisateur.prenom} {realisateur.nom}
                        </h2>
                    </header>
                    {filmsRealisateur.length > 0 ? (
                        <div
                            ref={filmsRealisateurRef}
                            className="flex flex-wrap justify-center gap-4 sm:justify-start"
                        >
                            {filmsRealisateur.map((film) => (
                                <Link
                                    key={film.id}
                                    to={`/film/${encodeURIComponent(film.id)}`}
                                    className="opacity-0 group flex w-44 shrink-0 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
                                >
                                    <div className="aspect-3/4 h-64 w-full overflow-hidden bg-slate-900">
                                        <img
                                            src={film.imageURL}
                                            alt={film.titre}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="truncate p-2.5 text-xs font-medium text-white">
                                        {film.titre}
                                    </p>
                                    <span className="truncate px-2.5 pb-2.5 text-[10px] text-slate-300">
                                        {film.genre?.map((genre) => genre.libelle).join(", ")}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-slate-300">
                            Aucun film associé à ce réalisateur dans le catalogue.
                        </p>
                    )}
                </section>
            </main>
            <Footer />
        </section >
    )
}