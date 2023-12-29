import { create } from '@storybook/theming/create';

const color = {
  primary: 'hsl(60, 1%, 26%)',
  secondary: 'hsl(358, 79%, 51%)',
  text: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(60, 1%, 26%)',
    gray: 'hsl(0, 0%, 40%)',
  },
  line: {
    black: 'hsl(60, 1%, 26%)',
    gray: 'hsl(0, 0%, 88%)',
  },
  bg: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(60, 1%, 26%)',
    gray: 'hsl(0, 0%, 95%)',
  },
};

export default create({
  base: 'light',

  // Logo
  brandTitle: 'adnstyle',
  brandUrl: 'https://adnstyle.com/',
  brandImage: 'https://adnstyle.com/img/common/logo.png',
  brandTarget: '_blank',

  // Font
  // fontBase: '"SUIT", sans-serif',

  // Color palette
  colorPrimary: color.primary,
  colorSecondary: color.primary,

  // UI
  appBg: color.bg.gray,
  appContentBg: color.bg.white,
  appBorderColor: color.line.gray,
  appBorderRadius: 4,

  // Text
  textColor: color.text.black,
  textInverseColor: color.text.black,

  // Toolbar
  barBg: color.bg.white,
  barTextColor: color.text.black,
  barSelectedColor: color.text.black,

  // Form
  inputBg: color.bg.white,
  inputBorder: color.line.gray,
  inputTextColor: color.text.black,
  inputBorderRadius: 4,
});
