// import React from "react";
import { Badge } from "@mantine/core";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 65 ? "green" : score > 40 ? "yellow" : "gray";
  return (
    <Badge variant="light" color={color} radius="xs">
      {score}
    </Badge>
  );
};

export default CriticScore;
