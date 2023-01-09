import { dateCreator } from 'utils/dateCreator';

test('check func', () => {
  expect(dateCreator()).toHaveLength(24);
});
