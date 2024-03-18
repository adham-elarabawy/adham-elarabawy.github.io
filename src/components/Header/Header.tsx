import React from 'react';
import { Group } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import * as classes from './Header.module.css';
import { Link } from 'gatsby';

const links = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' },
];

// Adjust the Header function to accept props
// export function Header({ location }) {
export function Header({ location = { pathname: '/' } }) {
  const normalizePath = (path) => {
    if (path === '/') return path;
    return path.endsWith('/') ? path.slice(0, -1) : path;
  };
  const activeLink = normalizePath(location.pathname);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={activeLink === link.link ? 'true' : undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.navContainer}>
          <Group gap={5} className={classes.navGroup}>
            {items}
          </Group>
        </div>
        <div className={classes.ColorSchemeToggle}>
          <ColorSchemeToggle />
        </div>
      </div>
    </header>
  );
}
