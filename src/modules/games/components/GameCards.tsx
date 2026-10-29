import { useGames } from "../hooks/ReactQuery/useGames";
import type { Game } from "../types/types";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCards = () => {
  const { data, isPending, isError } = useGames();

  if (isPending) return <p>Loading games...</p>;
  if (isError) return <p>Failed to load games.</p>;
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.results.map((game: Game) => (
        <div key={game.id} className="rounded-lg border p-4">
          <img
            src={game.background_image ?? undefined}
            alt={game.name}
            className="h-48 w-full rounded object-cover"
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
