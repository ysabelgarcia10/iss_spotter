// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

const printISSSpotter = function(flyOverTime) {
  for (const pass of flyOverTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
};

nextISSTimesForMyLocation((error, flyOverTime) => {
  if (error) {
    return console.log("UH OH!! There's an error: ", error);
  }
  
  printISSSpotter(flyOverTime);
});