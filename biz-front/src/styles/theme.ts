const color = {
  // text color
  white: '#FFFFFF',
  black1: '#303030',
  grey1: '#7E7E7E',
  grey2: '#D9D9D9',
  danger: '#FA6B3C',
  transparent: 'transparent',

  //main color
  blue: '#00CDCE',
} as const;

const fontsize = {
  heading: '34px',
  subtitle: '24px',
  body1: '20px',
  body2: '18px',
  body3: '16px',
  body4: '14px',
  small: '12px',
} as const;

const shadow = {
  shadow: '0px 10px 25px rgba(190, 190, 190, 0.35)',
  shadowBtn: '1px 1px 10px rgba(0, 0, 0, 0.10)',
  shadowWhite: '0px 0px 10px #FFF',
};

const theme = {
  color,
  fontsize,
  shadow,
};

export type ThemeType = typeof theme;

export default theme;
