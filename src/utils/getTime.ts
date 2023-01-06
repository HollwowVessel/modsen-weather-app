export const getTime = (day: number) => {
  const date = new Date();
  const hours = (date.getHours() + day * 3) % 24;
  const minutes = '00';

  return `${String(hours)}:${minutes}`;
};
