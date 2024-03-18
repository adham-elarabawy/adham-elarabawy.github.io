import React, { useEffect } from 'react';
import { Transition } from '@mantine/core';
import { Header } from "../components/Header/Header";
import { useLocation } from "@reach/router"; // If you're using reach router

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation(); // This hook gives you the current location object
  
  useEffect(() => {
    // Scrolls to the top of the page whenever the pathname changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependency array with the path

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
