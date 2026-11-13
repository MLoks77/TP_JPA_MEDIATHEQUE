import mediathequeBG from "/images/mediathequeBG.webp"
import { Link, useLocation } from "react-router-dom";

const titreF = "Votre médiathèque en ligne"
const textF = "Explorez des milliers de films, des grands classiques aux dernières sorties"

const Liens = [
    { titre: "Accueil", lien: "/" },
    { titre: "Mediatheque", lien: "/mediatheque" },
    { titre: "Catalogue", lien: "/catalogue" },
];

export default function Footer() {
    const { pathname } = useLocation();

    return (
        <section>
            <div className="h-3 w-full bg-slate-900"></div>
            <section className="relative flex flex-row items-center justify-between w-full min-h-62.5 overflow-hidden bg-slate-900 text-white px-8 py-12">

                <img
                    src={mediathequeBG}
                    className="absolute right-0 top-0 h-full w-2/3 object-cover object-center z-0"
                />

                <div
                    className="absolute inset-0 bg-linear-to-r from-slate-900 from-55% via-slate-900/80 via-65% to-transparent z-10 pointer-events-none"
                />

                <article className="relative z-20 w-full justify-start flex flex-col gap-3">
                    <div className="gap-1 flex flex-col">
                        <h2 className="text-2xl font-bold">{titreF}</h2>
                        <p className="text-slate-300 mt-2">{textF}</p>
                        <div className="flex items-center gap-6 text-sm font-medium">
                            {Liens.map((item) => (
                                <Link
                                    key={item.titre}
                                    to={item.lien}
                                    className={`text-slate-300 transition hover:text-white p-2 ${pathname === item.lien && item.lien !== "/"
                                            ? "underline underline-offset-4"
                                            : ""
                                        }`}
                                >
                                    {item.titre}
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>

            </section>
        </section>
    );
}