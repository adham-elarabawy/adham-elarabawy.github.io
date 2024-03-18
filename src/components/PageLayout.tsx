import React from 'react';
import { Transition } from '@mantine/core';
import { Header } from "../components/Header/Header";

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Transition transition="fade" duration={150} timingFunction="ease-out" mounted={true}>
      {(styles) => (
        <div style={styles}>
          <Header location={location} />
          <div className="mx-auto mb-12 max-w-5xl">{children}</div>
          <p>test footer</p>
        </div>
      )}
    </Transition>
  );
};