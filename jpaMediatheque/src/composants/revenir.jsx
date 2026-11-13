import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Revenir({ destination, texte }) {
    return (
        <section>
            <Link to={destination} className="group p-2">
                <section className="flex flex-row items-center gap-3">
                    <FaRegArrowAltCircleLeft className="mt-1 text-2xl group-hover:text-white/80 text-white" />
                    <h1 className="text-2xl text-white font-semibold group-hover:text-white/80">
                        Revenir {texte}
                    </h1>
                </section>
            </Link>
        </section>
    )
}