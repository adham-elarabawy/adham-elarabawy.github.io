import React from "react";
import { Title, Text, Anchor } from "@mantine/core";
import * as classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Adham Elarabawy
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="l">
        Machine Learning Researcher
      </Text>
    </>
  );
}
