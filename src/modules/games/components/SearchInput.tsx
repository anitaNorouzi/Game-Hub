import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex h-full w-full items-center gap-3"
      style={{ minWidth: 0 }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <input
        ref={ref}
        type="search"
        id="game-search"
        name="query"
        placeholder="Search 90,000 Games"
        aria-label="Search games"
        className="h-full min-w-0 flex-1 appearance-none rounded-full border-0 text-xs text-inherit outline-none placeholder:text-neutral-600 focus:border-0 focus:outline-none focus:ring-0 dark:placeholder:text-neutral-400"
        style={{
          width: 0,
          height: "100%",
          backgroundColor: "transparent",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-full shrink-0 cursor-pointer items-center justify-center"
      >
        <FiSearch aria-hidden="true" />
      </button>
    </form>
  );
};

export default SearchInput;
