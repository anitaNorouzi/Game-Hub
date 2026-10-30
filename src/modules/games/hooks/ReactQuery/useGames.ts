import useData from "./useData";
import type { Game, GameGenre, Platform } from "../../types/types";

export function useGames(
  selectedGenre: GameGenre | null,
  selectedPlatform: Platform | null,
) {
  return useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id,
    },
  });
}
