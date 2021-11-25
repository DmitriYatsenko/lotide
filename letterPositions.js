const assertArraysEqual = function (array1, array2) {
    let wtf = true;

    if (array1.length !== array2.length) {
        wtf = false;
    }

    for (let w = 0; w < array1.length; w++) {
        if (array1[w] !== array2[w]) {
            wtf = false
        }
    }

    if (wtf === true) {
        console.log(`Assertion passed: ${array1} = ${array2}`);
    }
    else {
        console.log(`Assertion failed: ${array1} != ${array2}`);
    }
}

const eqArrays = function (array1, array2) {
    let wtf = true;

    if (array1.length !== array2.length) {
        wtf = false;
    }

    for (let w = 0; w < array1.length; w++) {
        if (array1[w] !== array2[w]) {
            wtf = false
        }
    }
    return wtf;
}

const letterPositions = function (sentence) {
    const results = {};
    let i = 0;
    for (var letter of sentence) {
        if (letter !== " ") {
            if (results[letter]) {
                results[letter].push(i);
            }
            else {
                results[letter] = [i];
            }
        }
        i++;
    }
    return results;
};

console.log(letterPositions("Hello"));