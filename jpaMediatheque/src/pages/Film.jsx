import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial'

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFilmsById } from "../services/api";

import Revenir from '../composants/revenir';
import PropositionFilms from '../composants/propositionFilms';

export default function Film() {
    const { id } = useParams(); // utilise les params du router/url ( film/:id ), il utilise donc :id

    const [film, setFilm] = useState({});

    useEffect(() => {
        getFilmsById(id).then((filmAPI) => {
            setFilm(filmAPI ?? {});
        });
    }, [id]);

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Film" />
            <main className="min-h-screen bg-linear-to-r from-slate-900 to-slate-700">
                {/*infos du film*/}

                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/catalogue" texte="au catalogue" />
                </section>

                <section className="p-4 max-w-7xl w-full mx-auto text-white">
                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        {film.imageURL && (
                            <img
                                src={film.imageURL}
                                alt={film.titre}
                                className="w-full md:w-80 lg:w-96 h-120 md:h-auto rounded-xl shadow-2xl object-cover shrink-0"
                            />
                        )}

                        <div className="flex-1 space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-baseline gap-3">
                                    <h1 className="text-4xl font-bold">{film.titre}</h1>
                                    {film.anneeSortie && (
                                        <span className="text-2xl text-slate-400">({film.anneeSortie})</span>
                                    )}
                                </div>

                                {film.genre && film.genre.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {film.genre.map((g) => (
                                            <span
                                                key={g.code}
                                                className="bg-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {g.libelle}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-slate-300 border-t border-slate-700">
                                    {film.longueur && (
                                        <p>
                                            <span className="font-semibold text-white">Durée :</span> {film.longueur} min
                                        </p>
                                    )}
                                    {film.nationalite && (
                                        <p>
                                            <span className="font-semibold text-white">Nationalité :</span> {film.nationalite}
                                        </p>
                                    )}
                                    <p>
                                        <span className="font-semibold text-white">Oscars :</span> {film.nombreOscars ?? 0}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-6 border-t border-slate-700 pt-6">
                                {film.realisateur && film.realisateur.length > 0 && (
                                    <div>
                                        <h2 className="text-xl font-bold mb-3">Réalisation</h2>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                            {film.realisateur.map((real) => (
                                                <Link
                                                    key={real.id}
                                                    to={`/profil/realisateur/${real.id}`}
                                                    className="bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:ring-2 hover:ring-slate-500 transition block"
                                                >
                                                    <img
                                                        src={real.imageURL}
                                                        alt={`${real.prenom} ${real.nom}`}
                                                        className="w-full h-28 object-cover"
                                                    />
                                                    <div className="p-2">
                                                        <p className="font-semibold text-xs truncate">
                                                            {real.prenom} {real.nom}
                                                        </p>
                                                        <p className="text-[10px] text-slate-400 truncate">{real.nationalite}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {film.acteur && film.acteur.length > 0 && (
                                    <div>
                                        <h2 className="text-xl font-bold mb-3">Casting principal</h2>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                            {film.acteur.map((act) => (
                                                <Link
                                                    key={act.code}
                                                    to={`/profil/acteur/${act.code}`}
                                                    className="bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:ring-2 hover:ring-slate-500 transition block"
                                                >
                                                    <img
                                                        src={act.imageURL}
                                                        alt={`${act.prenom} ${act.nom}`}
                                                        className="w-full h-28 object-cover"
                                                    />
                                                    <div className="p-2">
                                                        <p className="font-semibold text-xs truncate">
                                                            {act.prenom} {act.nom}
                                                        </p>
                                                        <p className="text-[10px] text-slate-400 truncate">{act.nationalite}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="p-4 mt-10 max-w-7xl w-full mx-auto border-slate-600 opacity-70" />
                <PropositionFilms film={film} />
            </main>

            <Footer />
        </section>
    )
}