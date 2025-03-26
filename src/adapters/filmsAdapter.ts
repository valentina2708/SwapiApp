export interface Films {
  nombre: string;
  episodio: number;
  sinopsis: string;
  director: string;
  productor: string;
  fecha_Estreno: string;
  personajes: string [];
  planetas: string [];
}

export const filmsAdapter = (data: any): Films => ({
  nombre: data.title,
  episodio: data.episode_id,
  sinopsis: data.opening_crawl,
  director: data.director,
  productor: data.producer,
  fecha_Estreno: data.release_date,
  personajes: data.characters,
  planetas: data.planets,
});
