import { useQuery } from "@tanstack/react-query";
import { fetchFilms } from "../services/filmsService";
//import { Film } from "../types";

export const useFilms = () => {
  return useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  });
};
