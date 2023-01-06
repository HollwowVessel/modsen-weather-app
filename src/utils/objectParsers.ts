import { DailyTown, DailyWeather, ListItem } from 'types/openWeatherTypes';
import {
  visualCrossingData,
  visualCrossingDay,
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
  res.days = resList;
  res.name = town;

  return res;
};

export const parseEvent = (obj: any) => {
  const res = [];
  console.log(obj);
  for (const item of obj) {
    const temp = { summary: '', start: '' };

    let { summary, start } = item;
    console.log(start);
    start = start.dateTime.substring(11, 19);
    temp.summary = summary;
    temp.start = start;
    res.push(temp);
  }

  return res;
};
