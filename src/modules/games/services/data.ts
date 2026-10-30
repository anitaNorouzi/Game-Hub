import apiClient from "../../../shared/services/api-client";
import type { FetchResponse } from "../types/types";
import type { AxiosRequestConfig } from "axios";

export async function getData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
) {
  //endpoint: data? game?genre?
  // ...requestConfig copies all the top-level Axios settings,
  // such as headers or timeout.

  const response = await apiClient.get<FetchResponse<T>>(endpoint, {
    ...requestConfig,
    params: { page_size: 12, ...requestConfig?.params },
  });
  return response.data;
}
