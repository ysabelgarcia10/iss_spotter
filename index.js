const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  console.log("-----------------------------------------------------");

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("UH OH! Fetching coordinates by IP error: ", error);
      return;
    }
  
    console.log("Fetching coordinates by IP worked!!!: ", coords);
  });

});

