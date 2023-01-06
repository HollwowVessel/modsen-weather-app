import { DailyWeather, ListItem } from 'types/openWeatherTypes';
import {
  visualCrossingData,
  visualCrossingDay,
  visualCrossingHour,
} from 'types/visualCrossingTypes';

export const parseObjectFromVisualCrossing = (
  obj: visualCrossingData
): visualCrossingData => {
  const resDays: visualCrossingDay[] = [];
  const { resolvedAddress, address, days } = obj;
  let res = { resolvedAddress, address, days };
  for (const item of days) {
    const { temp, icon } = item;
    const tempObj: visualCrossingDay = { temp, icon };
    resDays.push(tempObj);
  }
  res = { ...res, days: resDays };
  return res;
};

export const parseObjectFromOpenWeather = (obj: DailyWeather) => {
  const resList: ListItem[] = [];
  const town = (obj.city as any).name as string;

  for (const item of obj.list) {
    const tempItem: ListItem = { temp: 0, icon: '' };
    tempItem.temp = (item.main as any).temp;
    tempItem.icon = (item.weather as any).icon as string;
    resList.push(tempItem);
  }
  const res: DailyWeather = { list: [], name: '' };
  res.list = resList;
  res.name = town;

  return res;
};
