import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="List Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => {
          return (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable>
                <Card.Body>
                  <Card.Image
                    src={img}
                    width={"100%"}
                    height={140}
                  ></Card.Image>
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text>#{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
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
