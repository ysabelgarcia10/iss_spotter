const request = require('request-promise-native');

const fetchMyIP = function() {
  const path = 'https://api.ipify.org?format=json';
  return request(path)
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  const pathCoords = `https://freegeoip.app/json/${ip}`;
  return request(pathCoords);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const flyTimes = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(flyTimes);
};

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP, 
  fetchISSFlyOverTimes
};
