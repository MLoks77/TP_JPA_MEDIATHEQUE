import { Link } from "react-router-dom"
import DriftWall from "./DriftWall";
// images
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

const titre = "Médiathèque"

export default function Landing() {
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
                        to="/mediatheque"
                        className="inline-flex max-w-full items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition duration-300 hover:bg-slate-700"
                    >
                        Consulter notre catalogue de films
                    </Link>
                </div>
            </div>
        </section>
    );
}