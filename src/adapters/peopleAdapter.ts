export interface People {
    nombre: string;
    año_nacimiento: string;
    color_ojos: string;
    genero: string;
    color_cabello: string;
    altura: string;
    masa: string;
    color_Piel: string;
    mundo_Natal: string;
    peliculas: string[];
 
  
    
  }
  
  export const peopleAdapter = (data: any): People => ({
    nombre: data.name,
    año_nacimiento: data.birth_year,
    color_ojos: data.eye_color,
    genero: data.gender,
    color_cabello: data.hair_color,
    altura: data.height,
    masa: data.mass,
    color_Piel: data.skin_color,
    mundo_Natal: data.homeworld,
    peliculas: data.films,
    

  });
  