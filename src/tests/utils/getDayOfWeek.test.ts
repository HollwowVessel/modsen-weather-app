import { getDayOfWeek } from 'utils/getDayOfWeek';

test('check func', () => {
  expect(getDayOfWeek(1)).toHaveLength(3);
});
