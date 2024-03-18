import React from "react";
import { Title, Text, Anchor, Container } from "@mantine/core";
import { Center, Avatar } from '@mantine/core';
import * as classes from "./Welcome.module.css";
import { StaticImage } from "gatsby-plugin-image";

export function Welcome() {
  return (
    <>
      <Center mt={100}>
          <StaticImage src='../../images/avatar.png' width={150} style={{ borderRadius: '50%' }}></StaticImage>
      </Center>
      <Title className={classes.title} ta="center" mt={10}>
        Adham Elarabawy
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="l">
        Machine Learning Researcher
      </Text>
    </>
  );
}
