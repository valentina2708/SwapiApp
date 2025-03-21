import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../services/peopleService";

export const usePeople = () => {
  return useQuery({
    queryKey: ["people"], 
    queryFn: fetchPeople,
  });
};
