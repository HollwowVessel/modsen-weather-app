const spaces = {
  s: 8,
  l: 16,
  m: 24,
  x: 48,
  xl: 96,
};
const fonts = [8, 12, 24, 32, 40, 48, 56, 64];
const width = [8, 12, 24, 32, 72, 100, 128, 500];
const height = [12, 20, 32, 40, 72, 90, 100, 128, 500];

const colors = {
  white: '#fff',
  grey: '#31394b',
  darkGrey: '#242937',
  black: '#111',
  purple: '#8459dd',
};

const breakPoints = { mobile: 400, tablet: 900, laptop: 1280 };

export const theme = {
  spaces,
  fonts,
  width,
  height,
  breakPoints,
  colors,
};
