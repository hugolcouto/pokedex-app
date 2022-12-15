import Image from "next/image";
import style from "./style.module.scss";

interface Props {
    name: string;
    japaneseName: string;
    id: number;
    firstType?: string | undefined;
    secondType?: string | undefined;
}

export const PokemonItem = ({
    name,
    japaneseName,
    id,
    firstType = "normal",
    secondType,
}: Props) => {
    return (
        <li>
            <a href="" className={`${style.pokemonItem} ${style[firstType]}`}>
                <div className={style.info}>
                    <div className={style.name}>
                        <h3>{name}</h3>
                        <h5>{japaneseName}</h5>
                    </div>
                    <div className={style.types}>
                        <span className={`${style[firstType]}`}>
                            <img
                                src={`pkmntypes/${firstType}.svg`}
                                alt={firstType}
                                width={14}
                                height={14}
                            />
                        </span>
                        {secondType && (
                            <span className={`${style[secondType]}`}>
                                <img
                                    src={`pkmntypes/${secondType}.svg`}
                                    alt={secondType}
                                    width={14}
                                    height={14}
                                />
                            </span>
                        )}
                    </div>
                </div>
                <div className={style.image}>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                        width={95}
                        height={95}
                    />
                </div>
            </a>
        </li>
    );
};
