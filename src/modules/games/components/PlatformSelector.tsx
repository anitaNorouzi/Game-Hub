import { Button, Menu } from "@mantine/core";
import { RiArrowDownWideLine } from "react-icons/ri";
import usePlatforms from "../hooks/ReactQuery/usePlatforms";
const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return <p>Could not load platforms.</p>;

  return (
    <Menu radius={5} width={200} position="bottom-start">
      <Menu.Target>
        <Button radius={4} rightSection={<RiArrowDownWideLine />}>
          Platforms
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {data?.results.map((platform) => (
          <Menu.Item key={platform.id}>{platform.name}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default PlatformSelector;
