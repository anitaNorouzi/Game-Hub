import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";
import type { GameGenre, Platform } from "../types/types";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export interface GameQuery {
  genre: GameGenre | null;
  platform: Platform | null;
  sortOrder: string;
}

const HomePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
  });

  return (
    <div
      aria-label="app"
      className="grid min-h-screen grid-rows-[auto_1fr] bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
    >
      <Navbar />

      <section
        aria-label="Main Wrapper"
        className="grid grid-cols-1 p-10 dark:border-neutral-700 lg:grid-cols-[180px_minmax(0,1fr)]"
      >
        <aside className="Sidebar hidden lg:block" aria-label="sidebar">
          <Sidebar
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((query) => ({ ...query, genre }))
            }
          />
        </aside>
        <main className="main-content">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery((query) => ({ ...query, platform }))
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          ></SortSelector>
          <GameCards gameQuery={gameQuery} />
        </main>
      </section>
    </div>
  );
};

export default HomePage;
