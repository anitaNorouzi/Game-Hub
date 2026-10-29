import { useQuery } from "@tanstack/react-query";
import { getGames } from "../../services/games";

export function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: getGames,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
