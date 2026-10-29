// import React from "react";
import { useEffect } from "react";
import { Switch } from "@mantine/core";
import type { Theme } from "../../../shared/types/theme";
import { useLocalStorage } from "@mantine/hooks";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: "theme",
    defaultValue: "light",
  });

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <nav
      aria-label="navbar"
      id="game"
      className="flex flex-row w-screen p-4 gap-3 items-center justify-around bg-white dark:bg-neutral-900"
    >
      <h1 className="text-2xl font-bold">RAWG</h1>
      <div
        aria-label="Search bar"
        className="flex flex-row items-center gap-3 px-3.5 dark:bg-white/10 dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400 w-[80%] h-8 rounded-4xl text-xs"
      >
        <FiSearch />
        <input
          type="search"
          id="game-search"
          name="query"
          placeholder="Search 90,000 Games"
          aria-label="Search games"
          className="w-full placeholder:text-neutral-600 dark:placeholder:text-neutral-400  text-xs"
        />{" "}
      </div>

      <Switch
        value="default"
        checked={isDark}
        onChange={(event) =>
          setTheme(event.currentTarget.checked ? "dark" : "light")
        }
      />
    </nav>
  );
};

export default Navbar;
