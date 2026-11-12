import Navbar from '../composants/navbar'
import Footer from '../composants/footer'
import Filarial from '../composants/filarial';

const items = []

import { Link } from 'react-router-dom'

export default function Catalogue() {
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Catalogue" />
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
                            <div className="flex flex-row gap-3">
                                <h2 className="mb-4 text-lg font-semibold text-white">
                                    Filtrer les films
                                </h2>
                                <p className="mt-1 text-sm text-slate-300">
                                    {items.length} film
                                    {items.length !== 1 ? "s" : ""}
                                </p>
                            </div>
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