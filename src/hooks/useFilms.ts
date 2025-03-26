import { useQuery } from "@tanstack/react-query";
import { fetchFilms } from "../services/filmsService";


export const useFilms = () => {
  return useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  });
};
