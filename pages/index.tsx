import { CategorySelector } from "components/CategorySelector";
import { PokeballBackground } from "components/PokeballBackground";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <section className="content">
                <CategorySelector />
            </section>
            <PokeballBackground />
        </>
    );
};

export default Home;
