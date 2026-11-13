import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFilms } from "../services/api";
import GSAPanimationApparition from "../hooks/GSAPanimationApparition";

export default function PropositionFilms({ film }) {
    const [suggestionState, setSuggestionState] = useState({ filmId: null, films: [] });

    useEffect(() => {
        let actif = true;

        if (!film?.id) {
            return () => {
                actif = false;
            };
        }

        getFilms().then((films) => {
            if (!actif) return;

            const candidats = films.filter((candidat) =>
                String(candidat.id) !== String(film.id)
            );
            const choix = [];

            while (candidats.length > 0 && choix.length < 6) {
                const indexAleatoire = Math.floor(Math.random() * candidats.length);
                choix.push(candidats.splice(indexAleatoire, 1)[0]);
            }

            setSuggestionState({ filmId: film.id, films: choix });
        });

        return () => {
            actif = false;
        };
    }, [film]);

    const suggestions = suggestionState.filmId === film.id ? suggestionState.films : [];
    const suggestionsRef = GSAPanimationApparition(suggestions);

    return (
        <section className="mx-auto w-full max-w-7xl px-6 pt-6 pb-15">
            <header className="mb-8 text-left">
                <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    D'autres films de notre catalogue
                </h2>
            </header>
            <div
                ref={suggestionsRef}
                className="flex flex-wrap justify-center gap-4 sm:justify-start"
            >
                {suggestions.map((suggestion) => (
                    <Link
                        key={suggestion.id}
                        to={`/film/${encodeURIComponent(suggestion.id)}`}
                        className="opacity-0 group flex w-44 shrink-0 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
                    >
                        <div className="aspect-3/4 h-64 w-full overflow-hidden bg-slate-900">
                            <img
                                src={suggestion.imageURL}
                                alt={suggestion.titre}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                        </div>
                        <p className="truncate p-2.5 text-xs font-medium text-white">
                            {suggestion.titre}
                        </p>
                        <span className="truncate px-2.5 pb-2.5 text-[10px] text-slate-300">
                            {suggestion.genre?.map((genre) => genre.libelle).join(", ")}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}