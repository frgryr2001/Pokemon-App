import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavouriteCardPokemon } from "./FavouriteCardPokemon";
import { useRouter } from "next/router";

interface Props {
  favoritePokemons: number[];
}

export const FavouritePokemons: FC<Props> = ({ favoritePokemons }) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <Grid
          xs={6}
          sm={3}
          md={2}
          key={id}
          onClick={handleClick.bind(null, id)}
        >
          <FavouriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
