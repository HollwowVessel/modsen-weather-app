import { getBackgroundType } from 'utils/getBackgroundType';

test('check equal numbers', () => {
  expect(getBackgroundType(0, 0)).toEqual('#000');
});

test('check unequal numbers', () => {
  expect(getBackgroundType(0, 1)).toEqual('');
});
