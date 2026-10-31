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
        <Loader color="teal" />
      </div>
    );
  }

  return (
    <ul>
      {data?.map((genre) => (
        <li
          data-selected={selectedGenre?.id === genre.id}
          role="button"
          tabIndex={0}
          aria-pressed={selectedGenre?.id === genre.id}
          onClick={() => onSelectGenre(genre)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onSelectGenre(genre);
            }
          }}
          className="flex h-14 cursor-pointer items-center gap-3 rounded-2xl px-2 
           hover:bg-black/20 hover:text-white dark:hover:bg-white/10
            data-[selected=true]:text-white data-[selected=true]:bg-green-600/30
            data-[selected=true]:hover:bg-green-600/30
           "
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
          <span className="min-w-0 flex-1 truncate text-xs">{genre.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
