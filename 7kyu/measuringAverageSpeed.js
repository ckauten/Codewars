// Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

function calculateSpeed(distance, time) {
  if (distance.includes('km')) {
    distance = parseInt(distance);
    distance = distance *= 1000;
  }
  if (time.includes('min')) {
    time = parseInt(time);
    time = time *= 60;
  }
  distance = parseInt(distance);
  time = parseInt(time);
  let mph = Math.round((distance / time) * 2.23694);
  return `${mph}mph`;
}

//Perameters:
// distance
// time

//Returns:
//from meters per second to miles per hour

//Examples: 100m in 10s = 22mph

//Pseudocode:
//simple conversion
//to start take distance and figure out if its in meters already.
// if not, make it
//then convert m/s to mph
// return mph
