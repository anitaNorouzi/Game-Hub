import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
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
    myColor,
  },
  primaryColor: "myColor",
});

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default Providers;
