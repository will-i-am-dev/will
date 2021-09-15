import { extendTheme } from '@chakra-ui/react';


const theme = {
  colors: {
    primary: {
      500: '#1F2549',
    },
    secondary: {
      500: '#009EE2',
    },
    gray: {
      300: '#E7EAF9',
      400: '#767676',
      500: '#F2F2F2',
      600: '#E5E5E5',
      700: '#6C6C6C',
      800: '#BDBDBD',
      900: '#575757',
    },
    text: {
      500: '#404041',
    },
  },
  fonts: {
    heading: '"poppins", sans-serif',
    body: '"poppins", sans-serif',
    text: '"poppins", sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        color: '#404041',
        fontFamily: '"poppins", sans-serif',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 600,
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 400,
      },
      defaultProps: {
        size: 'sm',
        rounded: 'md',
      },
    },
  },
};
export default extendTheme(theme);
