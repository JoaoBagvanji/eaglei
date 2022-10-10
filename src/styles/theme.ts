import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#12375C',
      600: '#234a70',
      500: '#cce3f9',
      200: '#e5f1fc',
    },
    secondary: {
      700: '#294C70',
      500: '#3C536A',
    },
    green: {
      700: '#A1C861',
      500: '#52665A',
      300: '#04D361',
      
    },
    gray: {
      700: '#F5F5F5',
      600: '#AAB2AD',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF',
    white_light: 'f2f2f2'
  },
  fonts: {
    heading: 'Montserrat_600SemiBold',
    body: 'Montserrat_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});
