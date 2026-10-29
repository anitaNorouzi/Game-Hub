// import React from "react";
import Navbar from "../components/Navbar";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
  return (
    <div
      aria-label="app"
      className="grid min-h-screen grid-rows-[auto_1fr] bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
    >
      <Navbar />

      <section
        aria-label="Main Wrapper"
        className="grid grid-cols-1 lg:grid-cols-[1fr_5fr]  dark:border-neutral-700 p-10"
      >
        <aside className="Sidebar hidden lg:block" aria-label="sidebar">
          <Sidebar />
        </aside>
        <main className="main-content">
          <GameCards />
        </main>
      </section>
    </div>
  );
};

export default HomePage;
