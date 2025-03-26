export const getNameByUrl = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      return data.name || data.title || "Desconocido"; 
    } catch (error) {
      console.error("Error al obtener el nombre", error);

    }
  };
  