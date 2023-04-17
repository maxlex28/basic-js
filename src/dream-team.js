const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(Array.isArray(members))) {
    return false
  };
  let dtName = [];
  for (item of members) {
    if (typeof item != "string") {
      continue
    }
    else {
      validChar = ""      
      for (char of item) {
        if (char != " ") {
          validChar = char.toUpperCase()
          break
        }
      }      
    };
    dtName.push(validChar)
  }
  return (dtName.sort()).join("")  
}

let ex = ["Mike", null, "Jason", "gretha", "   ", undefined, 155, "Claus", "   walter"]

console.log(createDreamTeam(ex))

module.exports = {
  createDreamTeam
};
