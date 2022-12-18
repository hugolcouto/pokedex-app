import style from "./style.module.scss";
import { VscFilter, VscSearch } from "react-icons/vsc";

export const Controls = () => {
    return (
        <div className={style.controls}>
            <button title="Search" className={style.search}>
                <VscSearch size={18} />
            </button>
            <button title="Filter" className={style.filter}>
                <VscFilter size={18} />
            </button>
        </div>
    );
};
