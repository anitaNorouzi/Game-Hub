import { useQuery } from "@tanstack/react-query";
import { getData } from "../../services/data";
import type { AxiosRequestConfig } from "axios";

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return useQuery({
    // Keep responses for different Axios query parameters in separate cache entries.
    queryKey: ["data", endpoint, requestConfig?.params],
    // Forward optional Axios settings, such as genre filters, to the API request.
    queryFn: () => getData<T>(endpoint, requestConfig),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useData;
