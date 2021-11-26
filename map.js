const fourFs = ["feeding", "fleeing", "fighting", "ducking"];

const assertArraysEqual = function (array1, array2) {
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

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(fourFs, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['f', 'f', 'f', 'd']);