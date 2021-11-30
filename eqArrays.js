const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let wtf = true;

  if (array1.length !== array2.length) {
    wtf = false;
  }

  for (let w = 0; w < array1.length; w++) {
    if (array1[w] !== array2[w]) {
      wtf = false;
    }
  }
  return wtf;
}

module.exports = eqArrays;