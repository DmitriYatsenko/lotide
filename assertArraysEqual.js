const assertArraysEqual = function(array1, array2) {
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);