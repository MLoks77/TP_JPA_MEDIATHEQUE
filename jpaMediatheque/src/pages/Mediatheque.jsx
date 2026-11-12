import Navbar from '../composants/navbar'
import Footer from '../composants/footer'

import Filarial from '../composants/filarial'

export default function Mediatheque() {
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Médiatheque" />
            <main className="min-h-screen bg-linear-to-r from-slate-800 to-slate-700">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
                    <p>Image</p>
                </div>
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className="dancing-script text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Les films avec le plus d'oscars
                        </h1>
                    </header>
                </div>
                <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
                    <header className="mb-8 border-b border-slate-600 pb-6 text-left">
                        <h1 className="dancing-script text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                           Section
                        </h1>
                    </header>
                </div>
            </main>
            <Footer />
        </section>
    )
}