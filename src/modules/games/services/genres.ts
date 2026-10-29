import apiClient from "../../../shared/services/api-client";
import type { FetchGenreResponse } from "../types/types";

export async function getGenres() {
  const response = await apiClient.get<FetchGenreResponse>("/genres", {
    params: { page_size: 12 },
  });
  return response.data;
}
