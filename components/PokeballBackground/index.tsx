import style from "./style.module.scss";
import Pokeball from "icons/pokedex.svg";

export const PokeballBackground = () => {
    return (
        <div className={style.background}>
            <Pokeball width="800px" height="800px" />
        </div>
    );
};
