//import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Button, Card, Text, Title } from "@mantine/core";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card shadow="md" padding="xl" radius="lg" withBorder>
          <Title order={2}>Game Hub</Title>

          <Text c="dimmed" mt="sm" mb="lg">
            Welcome to your gaming dashboard.
          </Text>

          <Button color="violet" fullWidth>
            Explore Games
          </Button>
        </Card>
      </div>
      <div className="min-h-screen bg-red-900 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Hello Tailwind!</h1>
      </div>
    </>
  );
}

export default App;
