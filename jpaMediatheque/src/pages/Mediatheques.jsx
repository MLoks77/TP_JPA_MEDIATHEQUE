// composants
import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial'
// icons
import { FaMapMarkerAlt, FaPhoneAlt, FaFilm } from "react-icons/fa";
// react
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// api
import { getMediatheques } from "../services/api";
import GSAPanimationApparition from "../hooks/GSAPanimationApparition";

export default function Mediatheques() {
    const [mediatheques, setMediatheques] = useState([]);
    const [chargement, setChargement] = useState(true);

    useEffect(() => {
        getMediatheques().then((mediathequesAPI) => {
            setMediatheques(mediathequesAPI);
            setChargement(false);
        });
    }, []);

    const animApparition = GSAPanimationApparition(mediatheques);

    return (
        <section>
            <Navbar />
            <Filarial titrePage="Médiathèques" />
            <main className="min-h-screen bg-linear-to-r from-slate-900 to-slate-700">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">

                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className="dancing-script text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Nos médiathèques
                        </h1>
                        <p className="mt-2 text-slate-300">
                            Choisissez une médiathèque pour découvrir les films qu'elle propose.
                        </p>
                    </header>

                    {!chargement && mediatheques.length === 0 && (
                        <p className="rounded-xl border border-slate-600 bg-slate-900/40 p-6 text-slate-300">
                            Aucune médiathèque disponible pour le moment.
                        </p>
                    )}

                    <div ref={animApparition} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mediatheques.map((mediatheque) => {
                            const films = mediatheque.films ?? [];

                            return (
                                <Link
                                    key={mediatheque.id}
                                    to={`/mediatheque/${mediatheque.id}`}
                                    className="group opacity-0 flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
                                >
                                    {/* aperçu : les affiches des premiers films de la médiathèque */}
                                    <div className="grid h-48 grid-cols-4 overflow-hidden bg-slate-900">
                                        {films.slice(0, 4).map((film) => (
                                            <img
                                                key={film.id}
                                                src={film.imageURL}
                                                alt=""
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                            />
                                        ))}
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3 p-5 text-left text-white">
                                        <h2 className="text-xl font-bold">{mediatheque.nom}</h2>
                                        <div className="space-y-1 text-sm text-slate-300">
                                            <p className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="shrink-0 text-slate-400" />
                                                {mediatheque.adresse}, {mediatheque.ville}
                                            </p>
                                            {mediatheque.telephone && (
                                                <p className="flex items-center gap-2">
                                                    <FaPhoneAlt className="shrink-0 text-slate-400" />
                                                    {mediatheque.telephone}
                                                </p>
                                            )}
                                        </div>
                                        <p className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-sm font-semibold">
                                            <FaFilm />
                                            {films.length} film{films.length !== 1 ? "s" : ""}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}
