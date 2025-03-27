import axios from "axios";

export const fetchCharacters = async (query: string) => {
  if (!query) return [];
  const { data } = await axios.get(
    `https://swapi.dev/api/people/?search=${query}`
  );
  return data.results;
};
