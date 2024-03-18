import React from 'react';
import { Group, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import * as classes from './SocialMediaBar.module.css';

export function SocialMediaBar() {
  return (
    <Group gap={0} mt={1} justify="center" wrap="nowrap">
      <ActionIcon
        size="lg"
        color="gray"
        variant="subtle"
        component="a"
        href="https://github.com/adham-elarabawy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithub style={{ width: 18, height: 18 }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon
        size="lg"
        color="gray"
        variant="subtle"
        component="a"
        href="https://www.linkedin.com/in/adham-elarabawy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedin style={{ width: 18, height: 18 }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon
        size="lg"
        color="gray"
        variant="subtle"
        component="a"
        href="https://www.youtube.com/channel/UCMXZwXFwd7tI7pO7vUo5iuQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandYoutube style={{ width: 18, height: 18 }} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}

export default SocialMediaBar;
