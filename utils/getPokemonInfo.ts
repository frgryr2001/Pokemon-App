import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (id: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`, {
    headers: {
      "accept-encoding": null,
    },
  });

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
  return pokemon;
};
