import { getTime } from 'utils/getTime';

test('check func', () => {
  expect(getTime(1)).toHaveLength(5);
});
