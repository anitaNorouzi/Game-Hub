import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameGrid = ({ children }: Props) => (
  <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {children}
  </div>
);

export default GameGrid;
