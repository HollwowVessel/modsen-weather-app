import { getDailyWeatherApi } from 'api/getDailyWeatherApi';

test('check func', async () => {
  const data = await getDailyWeatherApi('Vitebsk');

  expect(data.cod).toEqual('200');
});
