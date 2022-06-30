function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}


const ourData = setData(10, 1, 10)
console.log(ourData)


function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                const temp = array[i];
                array[i] = array[j];
                 array[j] = temp;
            }
        }
    }
    return array
}
console.log(bubbleSort(ourData))