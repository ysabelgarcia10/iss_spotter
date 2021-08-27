const { nextISSTimesForMyLocation } = require('./iss_promised')

const printISSSpotter = function(flyOverTime) {
  for (const pass of flyOverTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
};

nextISSTimesForMyLocation ()
  .then((passTimes) => {
    printISSSpotter(passTimes)
  })
  .catch((error) => {
    console.log("UH OH! THERE'S AN ERROR!", error.message);
  });



