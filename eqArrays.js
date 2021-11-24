const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
  }
};

const eqArrays = function(array1, array2) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);