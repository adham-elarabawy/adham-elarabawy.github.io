import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Welcome />
    </PageLayout>
  );
}
