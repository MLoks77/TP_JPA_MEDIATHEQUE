import mediathequeBG from "/images/mediathequeBG.webp"

const titre ="Votre médiathèque en ligne"
const text = "Explorez des milliers de films, des grands classiques aux dernières sorties"

export default function Footer() {
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
                        <h2 className="text-2xl font-bold">{titre}</h2>
                        <p className="text-slate-300 mt-2">{text}</p>
                    </div>
                </article>

            </section>
        </section>
    );
}