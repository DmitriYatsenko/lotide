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
    let pizda = true;

    if (array1.length !== array2.length) {
        pizda = false;
    }

    for (let w = 0; w < array1.length; w++) {
        if (array1[w] !== array2[w]) {
            pizda = false;
        }
    }

    if (pizda === true) {
        console.log(`Assertion passed: ${array1} = ${array2}`);
    }
    else {
        console.log(`Assertion failed: ${array1} != ${array2}`);
    }
}

const without = function(array, items) {
    for (let v = 0; v < array.length; v++) {
        for (let w = 0; w < items.length; w++) {
            if (array[v] === items[w]) {
                array.splice(v, 1);
            }
        }
    }
    console.log(array);
}

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);