import React from "react";
import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import * as classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/blog', label: 'Blog' },
  { link: '/resume', label: 'Resume' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

    return (
        <header className={classes.header}>
        <Container size="md" className={classes.inner}>
            <div className={classes.navContainer}>
                <Group gap={5} className={classes.navGroup}>
                    {items}
                </Group>
            </div>
            <ColorSchemeToggle />
        </Container>
        </header>
    );
}