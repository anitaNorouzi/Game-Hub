import useData from "./useData";
import type { Game, GameGenre } from "../../types/types";

export function useGames(selectedGenre: GameGenre | null) {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } });
}
