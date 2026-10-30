import useData from "./useData";
import type { Platform } from "../../types/types";

const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatforms;
