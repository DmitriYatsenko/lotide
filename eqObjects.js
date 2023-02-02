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
            wtf = false;
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

console.log("FUCK11111111111111111111111111111111111111111111111111111111111111111111111111");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

console.log("FUCK22222222222222222222222222222222222222222222222222222222222222222222222222");

const cd = { c: "1", d: {fk1: "2", fk2: 3} };
const dc = { d: {fk1: "2", fk2: 3}, c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

console.log("FUCK33333333333333333333333333333333333333333333333333333333333333333333333333");

const str1 = ["A", "B", "C"];
const str2 = ["A", "B", "C"];
const str3 = ["a", "b", "c"];
const str4 = ["1", "2", "3"];
const str5 = [1, 2, 3];
assertEqual(eqObjects(str1, str2), true);
assertEqual(eqObjects(str2, str3), false);
assertEqual(eqObjects(str3, str4), false);
assertEqual(eqObjects(str4, str5), false);

module.exports = eqObjects;