export interface GameGenre {
  id: number;
  name: string;
}
// export interface FetchGenreResponse {
//   count: number;
//   results: GameGenre[];
// }

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  rating: number;
  genres: GameGenre[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GamesResponse {
  count: number;
  results: Game[];
}
