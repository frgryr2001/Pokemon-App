/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Layout } from "../../components/layouts";
import { FavouritePokemons } from "../../components/pokemon";
import { NoFavourites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = React.useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavouritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
