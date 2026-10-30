import { useGames } from "../hooks/ReactQuery/useGames";
import type { Game, GameGenre, Platform } from "../types/types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Image } from "@mantine/core";
import getCroppedImageUrl from "../../../shared/services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../pages/HomePage";

interface Props {
  gameQuery: GameQuery;
}
const GameCards = ({ gameQuery }: Props) => {
  const { data, isLoading, isError } = useGames(gameQuery);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {/* Render 12 placeholder cards while the games are loading.
         because the API request asks for 12 games (page_size: 12)
         You can change the number if you change the page size.
        */}

        {Array.from({ length: 12 }, (_, index) => (
          <GameCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (isError) return <p>Failed to load games.</p>;
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data.results.map((game: Game) => (
        <div key={game.id} className="rounded-lg border p-4">
          <Image
            src={
              game.background_image
                ? getCroppedImageUrl(game.background_image)
                : undefined
            }
            alt={game.name}
            h={192}
            w="100%"
            radius="md"
            fit="cover"
          />
          <h2 className="mt-2 text-lg font-bold">{game.name}</h2>
          <p>Rating: {game.rating}</p>
          <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
          <div className="flex justify-between">
            <PlatformIconList platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic}></CriticScore>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;
