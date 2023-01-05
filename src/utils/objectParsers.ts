import {
  visualCrossingData,
  visualCrossingDay,
  visualCrossingHour,
} from 'types/vissualCrossing';

export const parseObjectFromVisualCrossing = (
  obj: visualCrossingData
): visualCrossingData => {
  const resDays: visualCrossingDay[] = [];
  const { resolvedAddress, address, days } = obj;
  let res = { resolvedAddress, address, days };
  for (const item of days) {
    const { temp, icon, hours } = item;
    const tempHours: visualCrossingHour[] = [];
    // for (const hour of hours) {
    //     const { temp, feelslike, icon } = hour;
    //     tempHours.push({ temp, feelslike, icon });
    //   }
    const tempObj: visualCrossingDay = { temp, icon, hours: tempHours };
    resDays.push(tempObj);
  }
  res = { ...res, days: resDays };
  return res;
};
