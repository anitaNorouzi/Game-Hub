import { useQuery } from "@tanstack/react-query";
import { getData } from "../../services/data";

const useData = <T>(endpoint: string) => {
  return useQuery({
    queryKey: ["data", endpoint],
    queryFn: () => getData<T>(endpoint),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useData;
