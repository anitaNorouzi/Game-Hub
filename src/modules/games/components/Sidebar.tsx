import GenreList from "./GenreList";
import type { GameGenre } from "../types/types";

interface Props {
  onSelectGenre: (genre: GameGenre) => void;
}

const Sidebar = ({ onSelectGenre }: Props) => {
  return <GenreList onSelectGenre={onSelectGenre} />;
};

export default Sidebar;
