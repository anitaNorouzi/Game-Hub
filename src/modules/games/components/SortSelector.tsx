import { Button, Menu, Box } from "@mantine/core";
import { RiArrowDownWideLine } from "react-icons/ri";
//import { useGames } from "../hooks/ReactQuery/useGames";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  //   const { data, error } = useGames();

  //   if (error) return <p>Could not load platforms.</p>;
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Box px={{ base: 24, lg: 0 }} style={{ display: "inline-flex" }}>
      <Menu radius={5} width={200} position="bottom-start">
        <Menu.Target>
          <Button radius={4} rightSection={<RiArrowDownWideLine />}>
            Order by: {currentSortOrder?.label || "Relevance"}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {sortOrders.map((order) => (
            <Menu.Item
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default SortSelector;
