import apiClient from "../../../shared/services/api-client";
import type { GamesResponse } from "../types/types";

export async function getGames() {
  const response = await apiClient.get<GamesResponse>("/games", {
    params: { page_size: 12 },
  });
  return response.data;
}
