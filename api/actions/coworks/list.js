export default function list() {
  return new Promise((resolve) => {
    resolve([{
      Latitude: 55.14821,
      Longitude: 10.14187,
      Distortion: 3.06
    }, {
      Latitude: -7.34069,
      Longitude: 20.46163,
      Distortion: 1.02
    }, {
      Latitude: 33.39821,
      Longitude: -46.62332,
      Distortion: 1.43
    }, {
      Latitude: 23.85095,
      Longitude: 33.14147,
      Distortion: 1.20
    }, {
      Latitude: -13.81181,
      Longitude: -38.17255,
      Distortion: 1.06
    }]);
  });
}
