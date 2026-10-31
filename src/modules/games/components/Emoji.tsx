import { Image, type ImageProps } from "@mantine/core";
import bullseye from "../../../assets/bulls eye.png";
import meh from "../../../assets/meh.svg";
import thumbup from "../../../assets/Thumbs.png";
interface Props {
  rating: number;
}

type EmojiImageProps = ImageProps & { alt: string };

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: EmojiImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbup, alt: "recommended" },
    5: { src: bullseye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} h={18} w={18} />;
};

export default Emoji;
