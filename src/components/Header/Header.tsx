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
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

    return (
      <header className={classes.header}>
        <div className={classes.inner}>
          {/* This div will contain the nav items and be centered in the header */}
          <div className={classes.navContainer}>
            <Group gap={5} className={classes.navGroup}>
              {items} {/* Your navigation items go here */}
            </Group>
          </div>
          {/* The ColorSchemeToggle is absolutely positioned relative to the inner div */}
          <div className={classes.ColorSchemeToggle}>
            <ColorSchemeToggle />
          </div>
        </div>
      </header>
    );
}