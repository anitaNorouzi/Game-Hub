import GenreList from "./GenreList";
import type { GameGenre } from "../types/types";

interface Props {
  selectedGenre: GameGenre | null;
  onSelectGenre: (genre: GameGenre) => void;
}

const Sidebar = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <GenreList
      selectedGenre={selectedGenre}
      onSelectGenre={onSelectGenre}
    />
  );
};

export default Sidebar;
