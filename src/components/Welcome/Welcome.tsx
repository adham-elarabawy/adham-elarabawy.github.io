import React from "react";
import { Center, Title, Text, Tooltip, Anchor } from '@mantine/core';
import * as classes from "./Welcome.module.css";
import { StaticImage } from "gatsby-plugin-image";

export function Welcome() {
  return (
    <>
      <Center pt={40}>
        <Tooltip label="Hello!" position="center">
          <div> {/* Wrap StaticImage in a div for Tooltip to work correctly */}
            <StaticImage
              src='../../images/avatar.png'
              className={classes.avatarZoom}
              width={150}
              style={{ borderRadius: '50%' }}
              alt=""
              quality={95}
            />
          </div>
        </Tooltip>
      </Center>
      <Title className={classes.title} ta="center" mt={10}>
        Adham Elarabawy
      </Title>
      <Text size="lg" color="dimmed" ta="center" maw={580} mx="auto" mt="l">
        ML Research at <Anchor href="https://π.com" target="_blank" rel="noopener noreferrer">Physical Intelligence</Anchor>
      </Text>
    </>
  );
}
