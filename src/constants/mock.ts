import { DailyWeather } from 'types/openWeatherTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

export const mockWeatherDaily: visualCrossingData = {
  resolvedAddress: 'Беларусь',
  address: 'Витебск',
  days: [
    {
      temp: -2.7,
      icon: 'snow',
    },
    {
      temp: -13.4,
      icon: 'partly-cloudy-day',
    },
    {
      temp: -15,
      icon: 'partly-cloudy-day',
    },
    {
      temp: -13.7,
      icon: 'partly-cloudy-day',
    },
    {
      temp: -10,
      icon: 'snow',
    },
    {
      temp: -5.4,
      icon: 'snow',
    },
  ],
};

export const mockWeatherHourly: DailyWeather = {
  name: 'Vitebsk',
  days: [
    { temp: -14.59, icon: '02n' },
    { temp: -14.75, icon: '02n' },
    { temp: -15.2, icon: '02n' },
    { temp: -15.75, icon: '02n' },
    { temp: -16.04, icon: '03n' },
    { temp: -15.25, icon: '04n' },
    { temp: -13.73, icon: '04d' },
  ],
};
