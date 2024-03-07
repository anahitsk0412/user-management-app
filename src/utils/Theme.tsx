import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#4873AF',
    light: '#E5EFFD',
    dark: '#355888',
  },
  secondary: {
    main: '#44474D',
    dark: '#060606',
    light: '#808080',
    text: '#808080',
  },
  common: {
    white: '#ffffff',
    black: '#272727',
  },
  nude: {
    main: '#fd7f01',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    body3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
  }

  interface Palette {
    nude: Palette['primary'];
  }

  interface PaletteOptions {
    nude: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    body3: true;
    label1: true;
    label2: true;
    label3: true;
  }
}

export const UserManagementTheme = createTheme({
  palette: palette,
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
          fontWeight: 700,
          color: palette.secondary.dark,
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          borderRadius: '10px',
          fontSize: '1rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: palette.common.white,
        },
      },
    },
  },
});
