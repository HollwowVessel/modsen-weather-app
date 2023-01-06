export const getWeekWeatherApi = async (town: string) => {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${town}?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_CROSSING_KEY}&contentType=json`
  );

  return res.json();
};
