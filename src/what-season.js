const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  else if (!(date instanceof Date)) {
    throw new Error("Invalid date!")
  }
  else if (isNaN(date.getTime())) {
    throw new Error("Invalid date!")
  }
  let stamp = date.getTime();
  let date_2 = new Date(stamp);
  if (stamp == date_2.getTime()) {
    let month = date.getMonth()
    console.log(month)
    const result = month < 2 ? "winter" : month < 5 ? "spring" : month < 8 ? "summer" : month < 11 ? "fall" : "winter"
    return result
  }
  else {
    throw new Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};


