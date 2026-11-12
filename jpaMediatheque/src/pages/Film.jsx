import Navbar from '../composants/navbar'
import Footer from '../composants/footer'

import Filarial from '../composants/filarial'

export default function Film() {
    return (
        <section>
            <Navbar />
            <Filarial titrePage="Film"/>
            <main className="min-h-screen bg-linear-to-r from-slate-800 to-slate-700">
                <p>Film</p>
            </main>
            <Footer />
        </section>
    )
}