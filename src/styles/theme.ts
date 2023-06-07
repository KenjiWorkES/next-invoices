import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      '200': '#DFE3FA',
      '300': '#9277FF',
      '400': '#7C5DFA',
      '500': '#252945',
      '600': '#373B53',
      '700': '#1E2139',
    },
    grey: {
      '200': '#F8F8FB',
      '400': '#888EB0',
      '500': '#7E88C3',
      '600': '#141625',
      '700': '#0C0E16',
    },
    error: {
      '400': '#FF9797',
      '500': '#EC5757',
    },
  },
  typography: {
    fontFamily: 'League Spartan, sans-serif',
    h1: {
      fontSize: '4rem',
      lineHeight: '4.5rem',
      fontWeight: '700',
    },
    h2: {
      fontSize: '2.5rem',
      lineHeight: '2.75rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '3rem',
      fontWeight: '700',
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '1.875rem',
      fontWeight: '700',
    },
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.875rem',
      fontWeight: '500',
    },
    body2: {
      fontSize: '1.375rem',
      lineHeight: '2.25rem',
      fontWeight: '500',
    },
  },
});

export default theme;
