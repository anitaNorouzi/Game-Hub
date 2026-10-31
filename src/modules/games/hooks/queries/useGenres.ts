import useData from "./useData";
import type { GameGenre } from "../../types/types";

const useGenres = () => {
  return useData<GameGenre>("/genres");
};

export default useGenres;
