import { planetsAdapter } from "../adapters/planetsAdapter";

const API_URL = "https://swapi.py4e.com/api";

export const fetchPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  if (!response.ok) throw new Error("Error al obtener datos");

  const data = await response.json();
  return data.results.map(planetsAdapter);
};
