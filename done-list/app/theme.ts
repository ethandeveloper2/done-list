'use client';
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface PaletteColor {
    salmon?: string;
    gray?: string;
  }

  interface SimplePaletteColorOptions {
    salmon?: string;
    gray?: string;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    salmon: true;
    gray: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#0fa3b1',
    },
  },
  typography: {
    fontFamily: [
      // 'NanumSquareNeo',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'salmon',
    }),
    gray: theme.palette.augmentColor({
      color: {
        main: '#B8B8B8',
      },
      name: 'gray',
    }),
  },
});

export default theme;
