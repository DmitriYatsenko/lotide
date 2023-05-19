// const array = process.argv[2];
// const fk = process.argv[3];

// function splitArray(array) {
//     return array.reduce((a, b) => {
//         return a.concat(b);
//     });
// }

function splitArray(array) {
    var ret = [];
    for(var i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            ret = ret.concat(splitArray(array[i]));
        } else {
            ret.push(array[i]);
        }
    }
    return ret;
}

console.log(splitArray([[1, 2, 3], [4, 5], [6]]));
console.log(splitArray([[1, 2, 3], [[4, 5]], [6]]));
console.log(splitArray([["fk", [5, ["69"]]], [6]]));