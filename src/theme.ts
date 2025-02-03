import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  defaultRadius: 'lg',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  colors: {
    dark: [
      '#D1D1D1',
      '#B3B3B3',
      '#8C8C8C',
      '#595959',
      '#404040',
      '#2E2E2E',
      '#242424',
      '#1A1A1A',  // main dark background
      '#141414',
      '#0A0A0A',
    ],
  },
});
