import { months, weekDays } from '@/constants/weatherDate';

export const dateCreator = () => {
  const date = new Date();

  const dayOfWeek = `${weekDays[date.getDay()]},`;
  let dayOfMonth: string | number = date.getDate();
  const month = months[date.getMonth()];
  const year = String(date.getFullYear());

  dayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : String(dayOfMonth);
  const res = [dayOfWeek, dayOfMonth, month, year];

  return res.join(' ');
};
