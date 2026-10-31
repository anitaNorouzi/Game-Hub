import { Image, type ImageProps } from "@mantine/core";
import bullseye from "../../../assets/bulls eye.png";
import meh from "../../../assets/meh.svg";
import thumbup from "../../../assets/Thumbs.png";
interface Props {
  rating?: number | null;
}

type EmojiImageProps = ImageProps & { alt: string };

const Emoji = ({ rating }: Props) => {
  if (rating == null || rating < 3) return null;
  const emojiMap: { [key: number]: EmojiImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbup, alt: "recommended" },
    5: { src: bullseye, alt: "exceptional" },
  };
  const emoji = emojiMap[rating];
  if (!emoji) return null;

  return <Image {...emoji} h={18} w={18} />;
};

export default Emoji;
