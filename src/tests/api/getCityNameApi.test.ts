import { getCityNameApi } from 'api/getCityNameApi';

test('check func', async () => {
  const lon = 30;
  const lat = 55.1927;
  const data = await getCityNameApi({ lat, lon });

  expect(data.name).toEqual('Vitebsk');
});
