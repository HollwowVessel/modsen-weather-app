import { Event } from '@/types/eventTypes';
import { DailyTown, DailyWeather, ListItem } from '@/types/openWeatherTypes';
import {
  visualCrossingData,
  visualCrossingDay,
} from '@/types/visualCrossingTypes';

export const parseObjectFromVisualCrossing = (
  obj: visualCrossingData
): visualCrossingData => {
  const resDays: visualCrossingDay[] = [];
  const { resolvedAddress, address, days } = obj;
  for (const item of days) {
    const { temp, icon } = item;
    const tempObj: visualCrossingDay = { temp, icon };
    resDays.push(tempObj);
  }
  const res: visualCrossingData = {
    resolvedAddress: String(resolvedAddress.split(',').at(-1)),
    address,
    days: resDays?.slice(0, 7),
  };
  return res;
};

export const parseObjectFromOpenWeather = (obj: DailyWeather) => {
  const resList: ListItem[] = [];
  const town = (obj.city as DailyTown).name as string;
  if (!obj?.list) return;
  for (const item of obj.list) {
    const tempItem: ListItem = { temp: 0, icon: '' };
    if (item.main && item.weather) {
      tempItem.temp = item.main.temp;
      tempItem.icon = item.weather[0].icon;
    }

    resList.push(tempItem);
  }
  const res: DailyWeather = { days: [], name: '' };
  res.days = resList?.slice(0, 7);
  res.name = town;

  return res;
};

export const parseEvent = (obj: Event[]) => {
  const res: Event[] = [];
  if (!('items' in obj)) return;
  for (const item of obj.items as Event[]) {
    const { start, summary } = item;
    if (typeof start !== 'object' || !('dateTime' in start)) return;
    const tempTime = start.dateTime.substring(11, 16);
    const temp = { summary, start: tempTime };
    res.push(temp);
  }

  return res;
};
