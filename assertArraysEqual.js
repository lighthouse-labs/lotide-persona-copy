// const eqArrays = function(str1, str2) {
//   if (JSON.stringify(str1) == JSON.stringify(str2)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

const assertEqual = require('../assertEqual')

const eqArraysAssert = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = eqArraysAssert;