import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import {
  IoIosGlobe,
  IoLogoAndroid,
  IoLogoApple,
  IoLogoPlaystation,
  IoLogoWindows,
  IoLogoXbox,
} from "react-icons/io";
import type { IconType } from "react-icons";
import type { Platform } from "../types/types";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: IoLogoWindows,
    playstation: IoLogoPlaystation,
    xbox: IoLogoXbox,
    nintendo: BsNintendoSwitch,
    mac: IoLogoApple,
    linux: FaLinux,
    android: IoLogoAndroid,
    ios: IoLogoApple,
    web: IoIosGlobe,
  };

  return (
    <div className="flex items-center gap-2" aria-label="Supported platforms">
      {platforms.map(({ platform }) => {
        const Icon = iconMap[platform.slug];
        if (!Icon) return null;

        return (
          <span key={platform.id} title={platform.name}>
            <Icon aria-label={platform.name} size={12} color="gray" />
          </span>
        );
      })}
    </div>
  );
};

export default PlatformIconList;
