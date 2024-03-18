import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { PageLayout } from "../components/PageLayout";
import { Badge } from '@mantine/core';
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";


export default function HomePage() {
  return (
    <PageLayout>
      <Welcome />
      {/* <Badge color="blue">Badge</Badge> */}
      <SocialMediaBar />
    </PageLayout>
  );
}
