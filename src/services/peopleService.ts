import { peopleAdapter } from "../adapters/peopleAdapter";

const API_URL = "https://swapi.py4e.com/api";

export const fetchPeople = async () => {
  const response = await fetch(`${API_URL}/people`);
  if (!response.ok) throw new Error("Error al obtener datos");

  const data = await response.json();
  return data.results.map(peopleAdapter);
};
