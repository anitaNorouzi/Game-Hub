import useGenres from "../hooks/queries/useGenres";
import { Image } from "@mantine/core";
import getCroppedImageUrl, {
  noImage,
} from "../../../shared/services/image-url";
import { Loader } from "@mantine/core";
import type { GameGenre } from "../types/types";

interface Props {
  selectedGenre: GameGenre | null;
  onSelectGenre: (genre: GameGenre) => void;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) {
    return (
      <div className="flex min-h-32 items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <ul>
      {data?.map((genre) => {
        const isSelected = selectedGenre?.id === genre.id;

        return (
          <li
            data-selected={isSelected}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => onSelectGenre(genre)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelectGenre(genre);
              }
            }}
            className="flex h-14 cursor-pointer items-center gap-3 rounded-2xl px-2 hover:bg-black/20 dark:hover:bg-white/10"
            style={
              isSelected
                ? {
                    backgroundColor: "var(--mantine-primary-color-light)",
                    color: "var(--mantine-primary-color-light-color)",
                  }
                : undefined
            }
            key={genre.id}
          >
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              fallbackSrc={noImage}
              alt={genre.name}
              w={32}
              h={32}
              radius="md"
              fit="cover"
              className="shrink-0"
            />
            <span className="min-w-0 flex-1 truncate text-xs">
              {genre.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default GenreList;
