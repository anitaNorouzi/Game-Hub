import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";
import type { GameGenre, Platform } from "../types/types";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import GameGrid from "../components/GameGrid";

export interface GameQuery {
  genre: GameGenre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <div
      aria-label="app"
      className="grid min-h-screen grid-rows-[auto_1fr] bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
    >
      <Navbar
        onSearch={(searchText) =>
          setGameQuery((query) => ({ ...query, searchText }))
        }
      />

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
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <div className="flex flex-col items-start gap-y-2 min-[700px]:flex-row min-[700px]:items-center">
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
            />
          </div>
          <GameGrid>
            <GameCards gameQuery={gameQuery} />
          </GameGrid>
        </main>
      </section>
    </div>
  );
};

export default HomePage;
