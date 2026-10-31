import { useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="w-full"
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
        className="w-full placeholder:text-neutral-600 dark:placeholder:text-neutral-400  text-xs"
      />
    </form>
  );
};

export default SearchInput;
