import { peopleAdapter } from "../adapters/peopleAdapter";

const API_URL = "https://swapi.py4e.com/api";

export const fetchFilms = async () => {
  const response = await fetch(`${API_URL}/films`);
  if (!response.ok) throw new Error("Error al obtener datos");

  const data = await response.json();
  return data.results.map(peopleAdapter);
};
