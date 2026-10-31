import { MantineProvider } from "@mantine/core";
import theme from "./theme";

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default Providers;
