// api
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActeursByCode } from "../../services/api";
// composants
import Navbar from "../../composants/navbar";
import Footer from "../../composants/footer";
import Filarial from "../../composants/filarial";
import Revenir from "../../composants/revenir";

export default function Acteur() {
    const { code } = useParams(); // utilise les params du router/url ( Acteur/:id ), il utilise donc :id

    const [acteur, setActeur] = useState([]);

    useEffect(() => {
        getActeursByCode(code).then((acteurAPI) => {
            setActeur(acteurAPI);
        });
    }, [code]);
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Catalogue" />
            <main className="min-h-screen bg-linear-to-r from-slate-900  to-slate-700">
                <section className="p-4 max-w-7xl w-full mx-auto">
                    <Revenir destination="/mediatheque" texte="à la médiathèque"/>
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