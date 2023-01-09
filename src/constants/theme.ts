const spaces = {
  zero: 0,
  s: 8,
  l: 16,
  m: 24,
  x: 48,
  xl: 96,
};
const fonts = { ss: 16, s: 24, l: 32, m: 40, x: 48, xl: 56, xxl: 64 };
const width = { ss: 16, s: 24, l: 32, m: 72, x: 100, xl: 128, xxl: 500 };
const height = {
  ss: 16,
  s: 20,
  l: 32,
  m: 72,
  i: 80,
  x: 100,
  xl: 128,
  xxl: 500,
};
const weatherType = {
  rainy: 'https://backlightblog.com/images/2021/11/rain-photography-header.jpg',
  sunny:
    'https://i2-prod.examinerlive.co.uk/incoming/article10372520.ece/ALTERNATES/s1227b/JS75768352.jpg',
  snowy:
    'https://media.cnn.com/api/v1/images/stellar/prod/190827143018-01-snowy-weather-file.jpg?q=w_4713,h_2786,x_0,y_0,c_fill',
};

const breakPoints = { mobile: 700, tablet: 1000 };

export const theme = {
  spaces,
  fonts,
  width,
  height,
  breakPoints,
  ...weatherType,
};
