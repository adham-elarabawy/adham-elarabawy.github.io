import { Text, Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube , IconBrandX} from '@tabler/icons-react';
import * as classes from './Footer.module.css';
import React from 'react';

export function Footer() {
    return (
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Text align="center" size="sm" className={classes.copyright}>
              © 2024 Adham Elarabawy. All rights reserved.
          </Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {/* GitHub Icon */}
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/adham-elarabawy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          {/* LinkedIn Icon */}
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/adham-elarabawy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          {/* YouTube Icon */}
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://twitter.com/adhamelarabawy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
