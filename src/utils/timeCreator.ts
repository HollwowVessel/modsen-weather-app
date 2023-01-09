export const timeCreator = (): string => {
  const date = new Date();
  const time = [date.getHours(), date.getMinutes()];
  const res: string[] = [];
  const hour = time[0] < 12 ? ' AM' : ' PM';

  for (let i = 0; i < time.length; i++) {
    if (time[i] < 10) {
      res[i] = `0${String(time[i])}`;
    } else {
      res[i] = String(time[i]);
    }
  }
  return res.join(':') + hour;
};
