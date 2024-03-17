import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { Header } from "../components/Header/Header";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { PageLayout } from "../components/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Welcome />
    </PageLayout>
  );
}
