import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div aria-label="app" className="grid grid-rows-2 border-2 ">
      <nav aria-label="Main navigation">
        <Navbar />
      </nav>
      <section aria-label="Main Wrapper" className="grid grid-cols-2 border-4">
        <aside className="Sidebar hidden lg:block" aria-label="sidebar">
          aside
        </aside>
        <main className="main-content">main</main>
      </section>
    </div>
  );
};

export default HomePage;
