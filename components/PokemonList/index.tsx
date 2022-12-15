import { PokemonItem } from "components/PokemonItem";
import style from "./style.module.scss";

interface ElementProps {
    id: number;
    name: {
        english: string;
        japanese: string;
    };
    type: string[];
}

interface Props {
    list: Array<ElementProps>;
}

export const PokemonList = ({ list }: Props) => {
    return (
        <ul className={style.pokemonList}>
            {list.map(
                (item: ElementProps, index: number): JSX.Element => (
                    <PokemonItem
                        key={index}
                        name={item.name.english}
                        japaneseName={item.name.japanese}
                        id={item.id}
                        firstType={item.type[0].toLowerCase()}
                        secondType={item.type[1]?.toLowerCase() || undefined}
                    />
                )
            )}
        </ul>
    );
};
