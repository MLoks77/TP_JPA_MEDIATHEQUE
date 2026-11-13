// api
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActeursByCode, getFilms } from "../../services/api";
// composants
import Navbar from "../../composants/navbar";
import Footer from "../../composants/footer";
import Filarial from "../../composants/filarial";
import Revenir from "../../composants/revenir";

export default function Acteur() {
    const { code } = useParams(); // utilise les params du router/url ( Acteur/:id ), il utilise donc :id

    const [acteur, setActeur] = useState({});
    const [films, setFilms] = useState([]);

    useEffect(() => {
        Promise.all([getActeursByCode(code), getFilms()]).then(([acteurAPI, filmsAPI]) => {
            setActeur(acteurAPI ?? {});
            setFilms(filmsAPI);
        });
    }, [code]);

    const filmsActeur = films.filter((film) =>
        film.acteur?.some((acteurLie) => acteurLie.code === code)
    );

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Catalogue" />
            <main className="min-h-screen bg-linear-to-r from-slate-900  to-slate-700">
                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/mediatheque" texte="à la médiathèque" />
                </section>
                <section className="max-w-7xl w-full mx-auto p-6 text-white">
                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        {acteur.imageURL && (
                            <img
                                src={acteur.imageURL}
                                alt={`${acteur.prenom} ${acteur.nom}`}
                                className="w-full md:w-80 lg:w-96 h-120 md:h-auto rounded-xl shadow-2xl object-cover shrink-0"
                            />
                        )}

                        <div className="flex-1 space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold">{acteur.prenom} {acteur.nom}</h1>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-slate-300 border-t border-slate-700">
                                    <p>
                                        <span className="font-semibold text-white">Âge :</span> {acteur.age} ans
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Nationalité :</span> {acteur.nationalite}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Genre :</span> {acteur.genre}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Email :</span> {acteur.email}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Maison d'édition :</span> {acteur.maisonEdition? acteur.maisonEdition : "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="p-4 mt-10 max-w-7xl mx-auto border-slate-600 opacity-70 px-5" />

                {/*participation dans les films*/}
                <section className="mx-auto w-full max-w-7xl px-6 pt-6 pb-15">
                    <header className="mb-8 text-left">
                        <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                            Films avec {acteur.prenom} {acteur.nom}
                        </h2>
                    </header>
                    {filmsActeur.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                            {filmsActeur.map((film) => (
                                <Link
                                    key={film.id}
                                    to={`/film/${encodeURIComponent(film.id)}`}
                                    className="group flex w-44 shrink-0 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
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
                            Aucun film associé à cet acteur dans le catalogue.
                        </p>
                    )}
                </section>
            </main>
            <Footer />
        </section >
    )
}