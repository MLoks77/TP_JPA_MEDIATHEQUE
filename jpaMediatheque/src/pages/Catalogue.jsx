import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial';

import { Link } from 'react-router-dom'

// films
import LeGrandBain from "../imagesSite/films/LeGrandBain.webp";
import VingtDieux from "../imagesSite/films/VingtDieux.webp";
import LaGuerreDesLulus from "../imagesSite/films/LaGuerreDesLulus.webp";
import DjangoUnchained from "../imagesSite/films/DjangoUnchained.webp";
import Deadpool2 from "../imagesSite/films/Deadpool2.webp";
import BluePeriod from "../imagesSite/films/BluePeriod.webp";
import Spiderman3 from "../imagesSite/films/Spiderman3.webp";
import Soul from "../imagesSite/films/Soul.webp";
import OnIra from "../imagesSite/films/OnIra.webp";
import Novocaine from "../imagesSite/films/Novocaine.webp";
import Thunderbolts from "../imagesSite/films/Thunderbolts.webp";
import StarWarsTheLastJedi from "../imagesSite/films/StarWarsTheLastJedi.webp";
import VenomLetThereBeCarnage from "../imagesSite/films/VenomLetThereBeCarnage.webp";
import Clayface from "../imagesSite/films/Clayface.webp";
import GodzillaMinusZero from "../imagesSite/films/GodzillaMinusZero.webp";
import ResidentEvil from "../imagesSite/films/ResidentEvil.webp";

const items = [
    { image: LeGrandBain, title: "Le Grand Bain" },
    { image: VingtDieux, title: "Vingt Dieux" },
    { image: LaGuerreDesLulus, title: "La Guerre des Lulus" },
    { image: DjangoUnchained, title: "Django Unchained" },
    { image: Deadpool2, title: "Deadpool 2" },
    { image: BluePeriod, title: "Blue Period" },
    { image: Spiderman3, title: "Spider-Man 3" },
    { image: Soul, title: "Soul" },
    { image: OnIra, title: "On ira" },
    { image: Novocaine, title: "Novocaine" },
    { image: Thunderbolts, title: "Thunderbolts" },
    { image: StarWarsTheLastJedi, title: "Star Wars: The Last Jedi" },
    { image: VenomLetThereBeCarnage, title: "Venom: Let There Be Carnage" },
    { image: Clayface, title: "Clayface" },
    { image: GodzillaMinusZero, title: "Godzilla Minus Zero" },
    { image: ResidentEvil, title: "Resident Evil" },
];

export default function Catalogue() {
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Catalogue"/>
            <main className="min-h-screen bg-linear-to-r from-slate-800 to-slate-700">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className="dancing-script text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Catalogue
                        </h1>
                        <p className="mt-2 text-slate-300">
                            Découvrez l'ensemble des films disponibles dans notre médiathèque.
                        </p>
                    </header>

                    <div className="flex flex-col gap-8 lg:flex-row">
                        <aside
                            aria-label="Filtrer le catalogue"
                            className="h-fit w-full shrink-0 rounded-xl border border-slate-600 bg-slate-900/60 p-5 text-left shadow-lg lg:w-64"
                        >
                            <h2 className="mb-4 text-lg font-semibold text-white">
                                Filtrer les films
                            </h2>
                            <label
                                htmlFor="recherche-film"
                                className="mb-4 block text-sm font-medium text-slate-300"
                            >
                                Rechercher par filtre
                            </label>
                            <input className="bg-slate-600 border-white p-2 rounded-2xl">
                            </input>
                        </aside>

                        <section
                            aria-label="Catalogue de films"
                            className="min-w-0 flex-1"
                        >
                            <p className="mb-4 text-sm text-slate-300">
                                {items.length} film
                                {items.length !== 1 ? "s" : ""}
                            </p>
                            {items.length > 0 ? (
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                    {items.map((film) => (
                                        <Link
                                            key={film.title}
                                            to={`/film/${encodeURIComponent(film.item)}`}
                                            className="group flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 transition duration-300 hover:border-white"
                                        >
                                            <div className="aspect-2/3 w-full overflow-hidden bg-slate-900">
                                                <img
                                                    src={film.image}
                                                    alt={film.title}
                                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <p className="p-3 text-sm font-medium text-white">
                                                {film.title}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}