import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Center } from "@mantine/core";

export default function HomePage() {
  return (
    <PageLayout>
      <Center mt={100}>
        <h1>Projects</h1>
      </Center>
    </PageLayout>
  );
}
