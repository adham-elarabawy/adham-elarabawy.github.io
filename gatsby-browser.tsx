// Assuming your global styles are in src/styles/global.css
import "@mantine/core/styles.css"; // Mantine styles
import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};
