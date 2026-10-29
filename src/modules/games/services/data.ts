import apiClient from "../../../shared/services/api-client";
import type { FetchResponse } from "../types/types";

export async function getData<T>(endpoint: string) {
  const response = await apiClient.get<FetchResponse<T>>(endpoint, {
    params: { page_size: 12 },
  });
  return response.data;
}
