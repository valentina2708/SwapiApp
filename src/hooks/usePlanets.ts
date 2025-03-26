import { useQuery } from "@tanstack/react-query";
import { fetchPlanets} from "../services/planetsService";


export const usePlanets = (url?: string) => {

  return useQuery({
    queryKey: ["planets"], 
    queryFn: fetchPlanets,
  });
};
