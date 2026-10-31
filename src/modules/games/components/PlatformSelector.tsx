import { Box, Button, Menu } from "@mantine/core";
import { RiArrowDownWideLine } from "react-icons/ri";
import usePlatforms from "../hooks/queries/usePlatforms";
import type { Platform } from "../types/types";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return <p>Could not load platforms.</p>;

  return (
    <Box
      component="span"
      px={24}
      pb={{ base: 10, md: 0 }}
      style={{ display: "inline-flex" }}
    >
      <Menu radius={5} width={200} position="bottom-start">
        <Menu.Target>
          <Button radius={4} rightSection={<RiArrowDownWideLine />}>
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {data?.results.map((platform) => (
            <Menu.Item
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
