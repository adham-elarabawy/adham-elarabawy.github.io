import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Badge } from '@mantine/core';


export default function HomePage() {
  return (
    <PageLayout>
      <Welcome />
      <Badge color="blue">Badge</Badge>
    </PageLayout>
  );
}
