export const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
export const getMapUrl = () => {
  return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
};
