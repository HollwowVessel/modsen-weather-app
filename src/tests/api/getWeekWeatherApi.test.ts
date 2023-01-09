import { getWeekWeatherApi } from 'api/getWeekWeatherApi';

test('check func', async () => {
  const data = await getWeekWeatherApi('Vitebsk');

  expect(data.address).toEqual('Vitebsk');
});
