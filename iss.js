/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

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

module.exports = { fetchMyIP };