import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  // eslint-disable-next-line prettier/prettier
  interface Theme {
    colors: {
      black: string
      white: string
      warmGray: string
      lightGray: string
      blue: string
    },
  }
}

const colors = {
  black: '#191919',
  white: '#ffffff',
  warmGray: '#999999',
  lightGray: '#fafafa',
  blue: '#3b99fc',
}

const theme = {
  typography: {
    fontFamily: 'Arial',
    body1: { fontSize: '12px' },
    body2: { fontSize: '12px' },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1000,
      xl: 1296,
    },
  },
  colors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Arial',
          fontSize: '12px',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          color: colors.black,
          '*': { boxSizing: 'border-box' },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained' as const,
        disableElevation: true,
      },
      styleOverrides: {
        containedPrimary: {
          border: 'transparent',
          backgroundColor: colors.blue,
          color: colors.white,
          height: '38.5px',
          fontSize: '12px',
          borderRadius: '19.5px',
          minWidth: '78px',
          padding: ' 2px 9px 2.5px 10px',
          textTransform: 'none' as const,
        },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { paddingTop: '16px' } } },
  },
}

export default createTheme(theme)
