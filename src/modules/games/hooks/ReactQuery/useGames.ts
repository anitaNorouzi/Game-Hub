import useData from "./useData";
import type { Game } from "../../types/types";

export function useGames() {
  return useData<Game>("/games");
}
