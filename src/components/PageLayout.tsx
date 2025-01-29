import React from 'react';
import { Transition } from '@mantine/core';
import { Footer } from "../components/Footer/Footer";
import { useLocation } from "@reach/router";
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export function PageLayout({ children }) {
  const location = useLocation();

  return (
    <MantineProvider theme={theme}>
      <Transition transition="fade" duration={150} timingFunction="ease-out" mounted={true}>
        {(styles) => (
          <div style={{ ...styles, position: 'relative', zIndex: 1 }}>
            <div className="mx-auto mb-12 max-w-5xl">{children}</div>
            <Footer />
          </div>
        )}
      </Transition>
    </MantineProvider>
  );
}
