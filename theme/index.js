import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/core';
const styles = {
  global: props => ({
    body: {
      color: mode('#000', '#000')(props),
      bg: mode('#F4F6F8', '#F4F6F8')(props),
    },
  }),
};
const colors = {
  blue: {
    900: "#5664D2",
    800: "#9085D2",
    700: "#4F5494"
  },
  yellow: {
    900: "#fad100"
  }
}
const components = {
};

const theme = extendTheme({
  components,
  styles,
  colors
});

export default theme;