const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual.toString()} === ${expected.toString()}`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
    }
};

const countOnly = function(allItems, items2Count) {
    const results = {};
    let result = {};
    for (var item in items2Count) {
        if (items2Count[item]) {
            result[item] = 0;
        }
    }
    for (let i = 0; i < allItems.length; i++) {
        console.log(allItems[i]);
        for (var countItem in result) {
            if (allItems[i] === countItem) {
                result[countItem]++;
            }
        }
    }
    console.log(result);
    return results;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);