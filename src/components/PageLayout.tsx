import React from 'react';
import { ScrollArea, Transition } from '@mantine/core';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useLocation } from "@reach/router"; // Correct import of useLocation

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation(); // Use the useLocation hook to get the current location object

  return (
    <Transition transition="fade" duration={150} timingFunction="ease-out" mounted={true}>
      {(styles) => (
        <div style={{ ...styles, position: 'relative', zIndex: 1 }}>
          <Header location={location} /> 
            <div className="mx-auto mb-12 max-w-5xl">{children}</div>
          <Footer />
        </div>
      )}
    </Transition>
  );
};
