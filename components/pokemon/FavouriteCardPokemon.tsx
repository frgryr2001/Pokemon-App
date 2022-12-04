import React, { FC } from "react";
import { Card } from "@nextui-org/react";

interface Props {
  id: number;
}
export const FavouriteCardPokemon: FC<Props> = ({ id }) => {
  return (
    <Card isHoverable isPressable css={{ padding: 10 }}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={140}
      />
    </Card>
  );
};
