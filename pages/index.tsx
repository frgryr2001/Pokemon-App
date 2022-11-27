import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="List Pokemons">
      <Button color="gradient">Home</Button>
    </Layout>
  );
};

export default HomePage;
