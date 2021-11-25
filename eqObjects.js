const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
    }
};

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

const eqObjects = function (object1, object2) {
    let eq = true;

    if (Object.keys(object1).length === Object.keys(object2).length) {
        for (var key1 in object1) {
            for (var key2 in object2) {
                if (key1 === key2 && !eqArrays(object1[key1], object2[key2])) {
                    eq = false;
                }
            }
        }
    }
    else {
        eq = false;
    }
    return eq;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(ab, ba);
assertEqual(ab, abc);
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc));
console.log(eqObjects(cd, cd2));