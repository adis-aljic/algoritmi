function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}


const ourData = setData(10, 1, 10)
console.log(ourData)


function insertionSort(array) {
    for (let i = 1; i < array.length - 1; i++) {
        const temp = array[i];
        let j = i;
        while (j > 0 && array[j - 1] >= temp) {
            array[j] = array[j - 1];
            --j;
        }
        array[j] = temp;
    }
    return array
}

console.log(insertionSort(ourData))