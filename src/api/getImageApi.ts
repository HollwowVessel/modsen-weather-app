export const getImageApi = async (url: string) => {
  const res = await fetch(url);

  return res.blob();
};
