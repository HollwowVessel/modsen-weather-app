import { timeCreator } from 'utils/timeCreator';

test('check func', () => {
  expect(timeCreator()).toHaveLength(8);
});
