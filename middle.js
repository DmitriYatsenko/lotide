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

const assertArraysEqual = function(array1, array2) {
    let wtf = true;

    if (array1.length !== array2.length) {
        wtf = false;
    }

    for (let w = 0; w < array1.length; w++) {
        if (array1[w] !== array2[w]) {
            wtf = false;
        }
    }

    if (wtf === true) {
        console.log(`Assertion passed: ${array1} = ${array2}`);
    }
    else {
        console.log(`Assertion failed: ${array1} != ${array2}`);
    }
}

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

middle([]);
middle([1]);
middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6]);