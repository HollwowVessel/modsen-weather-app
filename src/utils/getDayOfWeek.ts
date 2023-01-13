import { weekDays } from '@/constants/weatherDate';

export const getDayOfWeek = (day: number) =>
  weekDays[(new Date().getDay() + day + 1) % 7]?.substring(0, 3);
