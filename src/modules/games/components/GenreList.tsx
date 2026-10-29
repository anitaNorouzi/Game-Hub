import React from "react";
import useGenres from "../hooks/ReactQuery/useGenres";
const GenreList = () => {
  const { data, isLoading, isError } = useGenres();
  return (
    <ul>
      {data?.results.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
