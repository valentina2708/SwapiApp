export interface People {
    nombre: string;
    año_nacimiento: string;
    color_ojos: string;
    genero: string;
    color_cabello: string;
  }
  
  export const peopleAdapter = (data: any): People => ({
    nombre: data.name,
    año_nacimiento: data.birth_year,
    color_ojos: data.eye_color,
    genero: data.gender,
    color_cabello: data.hair_color,
  });
  