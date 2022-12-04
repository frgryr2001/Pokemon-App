import axios from "axios";
// import axiosRetry from "axios-retry";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
// axiosRetry(pokeApi, { retries: 3 });

export default pokeApi;
