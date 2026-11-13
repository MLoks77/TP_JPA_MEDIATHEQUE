import { useState } from "react";
import { FaUser } from "react-icons/fa";

function ActeurAvatar({ acteur }) {
    const [imageIndisponible, setImageIndisponible] = useState(!acteur.imageURL);

    return (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-700">
            {imageIndisponible ? (
                <FaUser className="h-4 w-4 text-slate-200" aria-hidden="true" />
            ) : (
                <img
                    src={acteur.imageURL}
                    alt=""
                    onError={() => setImageIndisponible(true)}
                    className="h-full w-full object-cover"
                />
            )}
        </span> // au cas si y'a pas d'img
    );
}

export default function Filtre({
    genres,
    realisateurs,
    acteurs,
    search,
    setSearch,
    choixGenre,
    setChoixGenre,
    choixReal,
    setChoixReal,
    choixActeur,
    setChoixActeur,
    plusieursRealisateurs,
    setPlusieursRealisateurs,
    trierParOscars,
    setTrierParOscars,
    nombreFilms, // on définit tout les props dont on a besoin
}) {
    const basculerActeur = (acteur) => {
        setChoixActeur((acteursChoisis) =>
            acteursChoisis.some((choisi) => choisi.code === acteur.code)
                ? acteursChoisis.filter((choisi) => choisi.code !== acteur.code)
                : [...acteursChoisis, acteur]
        );
    }; // permet de basculer l'état d'un acteur dans le filtre, si il est déjà choisi on le retire sinon on l'ajoute

    return (
        <aside
            aria-label="Filtrer le catalogue"
            className="h-fit w-full shrink-0 rounded-xl border border-slate-600 bg-slate-900/60 p-5 text-left shadow-lg lg:w-72"
        >
            <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">
                    Filtrer les films
                </h2>
                <p className="shrink-0 text-sm text-slate-300">
                    {nombreFilms} film{nombreFilms !== 1 ? "s" : ""}
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="recherche-film"
                        className="text-sm font-medium text-slate-300"
                    >
                        Rechercher par nom
                    </label>
                    <input
                        id="recherche-film"
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="..."
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="filtre-genre"
                        className="text-sm font-medium text-slate-300"
                    >
                        Filtrer par genre
                    </label>
                    <select
                        id="filtre-genre"
                        value={choixGenre}
                        onChange={(event) => setChoixGenre(event.target.value)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    >
                        <option value="">Tous les genres</option>
                        {genres.map((genre) => (
                            <option key={genre.code} value={genre.code}>
                                {genre.libelle}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="filtre-realisateur"
                        className="text-sm font-medium text-slate-300"
                    >
                        Filtrer par réalisateurs
                    </label>
                    <select
                        id="filtre-realisateur"
                        value={choixReal}
                        onChange={(event) => setChoixReal(event.target.value)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    >
                        <option value="">Tous les réalisateurs</option>
                        {realisateurs.map((realisateur) => (
                            <option key={realisateur.id} value={realisateur.id}>
                                {realisateur.prenom} {realisateur.nom}
                            </option>
                        ))}
                    </select>
                </div>

                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
                    <input
                        type="checkbox"
                        checked={plusieursRealisateurs}
                        onChange={(event) => setPlusieursRealisateurs(event.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-slate-400"
                    />
                    <span>Films avec plusieurs réalisateurs</span>
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
                    <input
                        type="checkbox"
                        checked={trierParOscars}
                        onChange={(event) => setTrierParOscars(event.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-slate-400"
                    />
                    <span>Trier par nombre d’Oscars</span>
                </label>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-slate-300">
                        Filtrer par acteurs
                    </p>
                    {choixActeur.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {choixActeur.map((acteur) => (
                                <button
                                    key={acteur.code}
                                    type="button"
                                    onClick={() => basculerActeur(acteur)}
                                    aria-label={`Retirer ${acteur.prenom} ${acteur.nom}`}
                                    title={`${acteur.prenom} ${acteur.nom}`}
                                    className="cursor-pointer rounded-full ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900 focus:outline-none focus:ring-white"
                                >
                                    <ActeurAvatar acteur={acteur} />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-slate-400">
                            Aucun acteur sélectionné
                        </p>
                    )}
                    <div
                        role="group"
                        aria-label="Choisir des acteurs"
                        className="grid max-h-44 grid-cols-5 justify-items-center gap-2 overflow-y-auto rounded-lg border border-slate-700 bg-slate-800/60 p-2"
                    >
                        {acteurs.map((acteur) => {
                            const estChoisi = choixActeur.some(
                                (choisi) => choisi.code === acteur.code
                            );

                            return (
                                <button
                                    key={acteur.code}
                                    type="button"
                                    onClick={() => basculerActeur(acteur)}
                                    aria-label={`${estChoisi ? "Retirer" : "Ajouter"} ${acteur.prenom} ${acteur.nom}`}
                                    aria-pressed={estChoisi}
                                    title={`${acteur.prenom} ${acteur.nom}`}
                                    className={`cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                                        estChoisi
                                            ? "ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900"
                                            : "hover:ring-2 hover:ring-slate-300"
                                    }`}
                                >
                                    <ActeurAvatar acteur={acteur} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
}
