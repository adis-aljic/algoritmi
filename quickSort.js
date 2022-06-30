function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}
const ourData = setData(10, 1, 10)
console.log(ourData)

function quickSort(array) {
    if (array.length == 0) {
        return [];
    }
    const left = [];
    const right = [];
    const pivot = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}


console.log(quickSort(ourData))