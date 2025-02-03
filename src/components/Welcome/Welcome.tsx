import React from "react";
import { Center, Title, Text, Tooltip, Anchor, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import * as classes from "./Welcome.module.css";
import { StaticImage } from "gatsby-plugin-image";

export function Welcome() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 1200px)');

  return (
    <>
      <Center>
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
      <Title
        ta="center"
        mt={10}
        style={{
          fontSize: isMobile ? 32 : 46,
          fontWeight: 700,
          letterSpacing: -2,
          color: 'var(--mantine-color-text)'
        }}
      >
        Adham Elarabawy
      </Title>
      <Text size="lg" color="dimmed" ta="center" maw={580} mx="auto" mt="l">
        Research Engineer at <Anchor href="https://π.com" target="_blank" rel="noopener noreferrer">Physical Intelligence</Anchor>
      </Text>
      {/* <Text size="sm" color="gray.6" ta="center" maw={580} mx="auto" mt="sm" fs="italic">
        Focused on efficient, large-scale models for multimodality and robotics that bridge perception and action.
      </Text> */}
    </>
  );
}
