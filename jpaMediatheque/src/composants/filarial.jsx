import { Link } from "react-router-dom";

export default function Filarial({ titrePage, titresuite }) {
    return (
        <section className="flex flex-row w-full h-10 items-center justify-start space-x-2 bg-slate-700 border border-black/20 md:pl-20 pl-3">
            <Link to="/" className="text-[10px] hover:underline font-bold uppercase tracking-[0.2em] text-white hover:text-white/90 transition-colors cursor-pointer">
                Accueil
            </Link>

            {titrePage && (
                <div className="flex items-center space-x-2 ">
                    <span className="text-[10px] text-white">/</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text1c font-medium text-white/70">
                        {titrePage}
                    </span>
                </div>
            )}

            {titresuite && (
                <div className="flex items-center space-x-2 ">
                    <span className="text-[10px] text-white">/</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text1c font-medium text-white/70">
                        {titresuite}
                    </span>
                </div>
            )}
        </section>
    );
}