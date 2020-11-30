function minMax(numberArrays) {
    min = getMin(numberArrays);    
    max = getMax(numberArrays);

    let result = [min, max];

    return result;
}

function getMin(numberArrays) {
    let min = numberArrays[0];

    for (let item of numberArrays) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

function getMax(numberArrays) {
    let max = numberArrays[0];

    for (let item of numberArrays) {
        if (item > max) {
            max = item;
        }
    }

    return max;
}

let numberArrays = [2, 1, 3, 5, 4];
console.log(minMax(numberArrays));