// api
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRealisateursById } from "../../services/api";
// composant 
import Revenir from "../../composants/revenir";
import Filarial from "../../composants/filarial";
import Navbar from "../../composants/navbar";
import Footer from "../../composants/footer";

export default function Realisateur() {
    const { id } = useParams(); // utilise les params du router/url ( realisateur/:id ), il utilise donc :id

    const [realisateur, setRealisateur] = useState([]);

    useEffect(() => {
        getRealisateursById(id).then((realisateurAPI) => {
            setRealisateur(realisateurAPI);
        });
    }, [id]);
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Réalisateur" />
            <main className="min-h-screen bg-linear-to-r from-slate-900  to-slate-700">
                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/mediatheque" texte="à la médiathèque"/>
                </section>
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
            </main>
            <Footer />
        </section >
    )
}