import { Link, useLocation } from "react-router-dom";

const titre ="Médiathèque"

const Liens = [
    { titre: "Accueil", lien: "/" },
    { titre: "Médiathèques", lien: "/mediatheques", actifs: ["/mediatheques", "/mediatheque/"] },
    { titre: "Catalogue", lien: "/catalogue" },
];

const estActif = (pathname, item) =>
    item.lien !== "/" && (item.actifs ?? [item.lien]).some((debut) => pathname.startsWith(debut));

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="w-full bg-slate-900 h-16 px-8 flex items-center justify-start gap-8 text-white">
            <Link to="/" className="dancing-script text-2xl font-semibold uppercase tracking-wider text-white">
                {titre}
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium">
                {Liens.map((item) => (
                    <Link
                        key={item.titre}
                        to={item.lien}
                        className={`text-slate-300 transition hover:text-white p-2 ${
                            estActif(pathname, item)
                                ? "underline underline-offset-4"
                                : ""
                        }`}
                    >
                        {item.titre}
                    </Link>
                ))}
            </div>
        </nav>
    );
}