import useData from "./useData";
import type { Game } from "../../types/types";
import type { GameQuery } from "../../pages/HomePage";

export function useGames(gameQuery: GameQuery) {
  return useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText || undefined,
    },
  });
}
