import gameGenres from "../../data/genres";
import type { GameGenre } from "../../types/types";

const data: GameGenre[] = gameGenres;

const useGenres = () => ({
  data,
  isLoading: false,
  error: null,
});

export default useGenres;
