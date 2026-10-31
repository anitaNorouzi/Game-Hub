import { createTheme, type MantineColorsTuple } from "@mantine/core";

const brand: MantineColorsTuple = [
  "#e6ffee",
  "#d3f9e0",
  "#a8f2c0",
  "#7aea9f",
  "#54e382",
  "#3bdf70",
  "#2bdd66",
  "#1bc455",
  "#0bae4a",
  "#00973c",
];

const theme = createTheme({
  colors: {
    brand,
  },
  primaryColor: "brand",
});

export default theme;
