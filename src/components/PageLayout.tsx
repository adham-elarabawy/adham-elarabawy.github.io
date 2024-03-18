import React, { useEffect } from 'react';
import { ScrollArea, Transition } from '@mantine/core';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useLocation } from "@reach/router"; // Import useLocation from Reach Router

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Transition transition="fade" duration={150} timingFunction="ease-out" mounted={true}>
      {(styles) => (
        <div style={styles}>
          <Header location={location} />
            <div className="mx-auto mb-12 max-w-5xl">{children}</div>
          <Footer />
        </div>
      )}
    </Transition>
  );
};
