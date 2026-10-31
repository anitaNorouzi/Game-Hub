// import React from "react";
import { Badge } from "@mantine/core";

interface Props {
  score?: number | null;
}
const CriticScore = ({ score }: Props) => {
  if (score == null) return null;

  const color = score > 65 ? "green" : score > 40 ? "yellow" : "gray";
  return (
    <Badge variant="light" color={color} radius="xs" className="shrink-0">
      {score}
    </Badge>
  );
};

export default CriticScore;
