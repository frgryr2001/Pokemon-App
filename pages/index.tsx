import { Grid } from "@nextui-org/react";

import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="List Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={index} />;
        })}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151", {
    headers: {
      "accept-encoding": null,
    },
  });
  const { data } = resp;
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
