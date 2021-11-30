const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
    let ftw = [];
    if (array.length > 2 && array.length % 2 === 0) {
        let n = array.length / 2;
        ftw = [array[n - 1], array[n]];
    }
    else if (array.length > 2 && array.length % 2 !== 0) {
        n = (array.length - 1) / 2;
        ftw = [array[n]];
    }
    console.log(ftw);
}

module.exports = middle;