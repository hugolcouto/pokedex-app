import style from "./style.module.scss";
import Pokedex from "icons/pokedex.svg";
import Moves from "icons/moves.svg";
import Items from "icons/items.svg";
import Link from "next/link";

export const CategorySelector = () => {
    return (
        <section className={style.selectorContent}>
            <div className={style.gridSelector}>
                <Link href={{ pathname: "pokedex" }} className={style.pokemon}>
                    <Pokedex width="48px" height="48px" />
                    <span> Pokémon</span>
                </Link>
                <Link href={{ pathname: "moves" }} className={style.moves}>
                    <Moves />
                    <span>Moves</span>
                </Link>
                <Link href={{ pathname: "items" }} className={style.items}>
                    <Items />
                    <span>Items</span>
                </Link>
            </div>
        </section>
    );
};
