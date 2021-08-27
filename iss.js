/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

//-----------------------------------------
//fetchMyIP function extracts the IP address from JSON path.
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  const path = 'https://api.ipify.org?format=json';
  
  request(path, (error, response, body) => {
    // const dataBody = JSON.parse(body);
    
    //finds error first such as typo in URL
    if (error) return callback(error, null);
    
    if (response.statusCode !== 200) {
      callback(Error(`Status code: ${response.statusCode} when fetching IP: ${body}`), null);
    }
    
    const ip = JSON.parse(body);
    callback(null, ip);
  });
};

//-----------------------------------------
//fetchCoordsByIP takes in an IP Address and returns the latitude and long for it.
const fetchCoordsByIP = function(ip, callback) {

  const pathCoords = `https://freegeoip.app/json/${ip.ip}`;

  request(pathCoords, (error, response, body) => {
    
    //finds error first such as typo in URL
    if (error) return callback(error, null);
    
    if (response.statusCode !== 200) {
      callback(Error(`Status code: ${response.statusCode} when fetching coordinates: ${body}`), null);
    }
    
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });

  });
};

//-----------------------------------------
module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
