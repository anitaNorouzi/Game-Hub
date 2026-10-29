import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../services/genres";

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: getGenres,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useGenres;
