import React from 'react';
import { Group } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import * as classes from './Header.module.css';
import { Link } from 'gatsby';

const links = [
  { link: '/', label: 'Home' },
  { link: '/blog', label: 'Blog' },
  { link: '/resume', label: 'Resume' },
];

export function Header({ location = { pathname: '/' } }) {
  // const normalizePath = (path) => {
  //   if (path === '/') return path;
  //   return path.endsWith('/') ? path.slice(0, -1) : path;
  // };
  const normalizePath = (path) => {
    // Split the path into segments
    const segments = path.split('/').filter(Boolean);
    // Return the first segment, or '/' if no significant segments are found
    return segments.length > 0 ? `/${segments[0]}` : '/';
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
