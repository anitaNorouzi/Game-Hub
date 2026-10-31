import type { GameQuery } from "../pages/HomePage";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return <h1 className="text-5xl pl-6 pb-3 ">{heading}</h1>;
};

export default GameHeading;
