import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

// composant
import DriftWall from "./DriftWall";

// api
import { getFilms } from "../services/api";

const titre = "Médiathèque"

export default function Landing() {
   const [items, setItems] = useState([]); // je définis un etat pour les items de la landing

   useEffect(() => {
       getFilms().then((films) => {
           setItems(films.map((film) => ({ // et j'insère les films dans l'état items pour les afficher
               image: film.imageURL,
               title: film.titre,
           })));
       });
   }, []);

    return (
        <section className="flex min-h-screen w-full flex-col overflow-hidden bg-slate-950 md:flex-row">
            <div className="relative order-1 h-[45vh] min-h-70 w-full md:order-2 md:h-screen md:min-h-140 md:w-[58%]">
                <DriftWall
                    items={items}
                    columns={4}
                    tileWidth={250}
                    tileHeight={300}
                    gap={18}
                    tilt={16}
                    turn={-14}
                    perspective={1200}
                    depth={120}
                    speed={20}
                    direction="up"
                    variance={0.45}
                    parallax={0.6}
                    lift={0}
                    fade={0.6}
                    dim={0.55}
                    overlayColor="#060010"
                    radius={14}
                    roll={2}
                    pauseOnHover={false}
                    grayscale={false}
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-transparent via-slate-950/20 to-slate-950 md:bg-linear-to-r md:from-slate-950/90 md:via-slate-950/20 md:to-transparent" />
            </div>

            <div className="relative z-20 order-2 flex flex-1 items-center px-6 py-12 md:order-1 md:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-xl text-center md:mx-0 md:text-left">
                    <h1 className="mb-6 text-[100px ] dancing-script text-white md:text-6xl">
                        {titre}
                    </h1>
                    <p className="mb-8 text-lg text-white md:text-xl">
                        Explorez notre médiathèque gratuitement <br></br>et accédez à tout notre catalogue.
                    </p>
                    <Link
                        to="/mediatheques"
                        className="inline-flex max-w-full items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition duration-300 hover:bg-slate-700"
                    >
                        Découvrir nos médiathèques
                    </Link>
                </div>
            </div>
        </section>
    );
}