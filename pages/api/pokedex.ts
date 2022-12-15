import type { NextApiRequest, NextApiResponse } from "next";
import PokedexData from "data/pokedex.json";

type Item = {
    id: number;
    name: {
        english: string;
        japanese: string;
    };
    type: string[];
};

let pokedexData = PokedexData as Item[];

const pokedex = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(pokedexData);
};

export default pokedex;
