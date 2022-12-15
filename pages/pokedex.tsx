import { PokeballBackground } from "components/PokeballBackground";
import { PokemonList } from "components/PokemonList";

interface Props {
    pokemonList: Array<{
        id: number;
        name: {
            english: string;
            japanese: string;
        };
        type: string[];
    }>;
}

const Pokedex = ({ pokemonList }: Props) => {
    console.log(pokemonList);
    return (
        <>
            <h1>Pokedex</h1>
            <PokemonList list={pokemonList} />
            <PokeballBackground />
        </>
    );
};

export default Pokedex;

export const getServerSideProps = async () => {
    const pokemonList = await fetch("http://localhost:3000/api/pokedex").then(
        (res) => res.json()
    );

    return {
        props: {
            pokemonList,
            // test,
        },
    };
};
