const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
    }
};

const countLetters = function (sentence) {
    let results = {};
    for (var letter of sentence) {
        if (letter !== " ") {
            if (results[letter]) {
                results[letter]++;
            }
            else {
                results[letter] = 1;
            }
        }
    }
    return results;
}

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("house")["h"], 1);