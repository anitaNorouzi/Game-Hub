// import React from "react";
import { useEffect } from "react";
import { Switch } from "@mantine/core";
import type { Theme } from "../../../shared/types/theme";
import { useLocalStorage } from "@mantine/hooks";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
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
        className="flex h-8 w-[80%] items-center rounded-4xl bg-neutral-100 px-3.5 text-xs dark:bg-neutral-800 dark:text-white"
        style={
          {
            "--search-background": "var(--color-neutral-100)",
          } as React.CSSProperties
        }
      >
        <SearchInput onSearch={onSearch} />
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
