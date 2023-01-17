// const array = process.argv[2];
// const fk = process.argv[3];

function splitArray(array) {
    return array.reduce((a, b) => {
        return a.concat(b);
    });
}

console.log(splitArray([[1, 2, 3], [4, 5], [6]]));