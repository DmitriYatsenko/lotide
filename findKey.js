const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
  }
};

const findKey = function (object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      let results = "";
      results += key.toString();
      return results;
    }
  }
}

let fk = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

console.log(fk);
assertEqual(fk, 'noma');