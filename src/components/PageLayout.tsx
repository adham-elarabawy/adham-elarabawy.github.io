import React from 'react';
import { Header } from "../components/Header/Header";

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header location={location} />
      <div className="mx-auto mb-12 max-w-5xl">{children}</div>
      <p>test footer</p>
    </>
  );
};