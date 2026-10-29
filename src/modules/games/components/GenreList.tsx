import useGenres from "../hooks/ReactQuery/useGenres";
import { Image } from "@mantine/core";
import getCroppedImageUrl from "../../../shared/services/image-url";
import { Loader } from "@mantine/core";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) {
    return (
      <div className="flex min-h-32 items-center justify-center">
        <Loader color="teal" />
      </div>
    );
  }

  return (
    <ul>
      {data?.results.map((genre) => (
        <li
          className="flex h-14 items-center gap-3 rounded-2xl px-2"
          key={genre.id}
        >
          <Image
            src={
              genre.image_background
                ? getCroppedImageUrl(genre.image_background)
                : undefined
            }
            alt={genre.name}
            w={32}
            h={32}
            radius="md"
            fit="cover"
            className="shrink-0"
          />
          <p className="min-w-0 flex-1 truncate">{genre.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
