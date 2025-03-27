export interface Planets {
  nombre: string;
  periodo_Rotacion: string;
  periodo_Orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  poblacion: string;
  aguas_Superficiales: string;
  residentes: string[];
  peliculas: string[];
}

export const planetsAdapter = (data: any): Planets => ({
  nombre: data.name,
  periodo_Rotacion: data.rotation_period,
  periodo_Orbital: data.orbital_period,
  diametro: data.diameter,
  clima: data.climate,
  gravedad: data.gravity,
  terreno: data.terrain,
  poblacion: data.population,
  aguas_Superficiales: data.surface_water,
  residentes: data.residents,
  peliculas: data.films,
});
