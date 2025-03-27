import { useQuery } from "@tanstack/react-query";
import {fetchCharacters} from "../services/searchService";

export function useSearchCharacters(query: string) {
    return useQuery({
      queryKey: ["search", query], 
      queryFn: () => fetchCharacters(query),
      enabled: !!query, 
      staleTime: 60000, 
    });
  }