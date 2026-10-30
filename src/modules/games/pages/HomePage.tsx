import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";
import type { GameGenre, Platform } from "../types/types";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<GameGenre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
        </aside>
        <main className="main-content">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameCards
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </main>
      </section>
    </div>
  );
};

export default HomePage;
