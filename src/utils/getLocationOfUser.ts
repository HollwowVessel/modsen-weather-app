const error = () => console.log("Doesn't get info about location :(((");
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const getLocationOfUser = (
  setLat: React.Dispatch<React.SetStateAction<number>>,
  setLng: React.Dispatch<React.SetStateAction<number>>
) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      setLat(latitude);
      setLng(longitude);
    },
    error,
    options
  );
};