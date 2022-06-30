function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}
const ourData = setData(10000, 1, 10000)



function bubbleSort(array) {
    const startTime = new Date().getTime();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                const temp = array[i];
                array[i] = array[j];
                 array[j] = temp;
            }
        }
    }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    return "Bubble sort algorithm sorted array for " + elapsedTime + "miliseconds."
}



function selectionSort(array) {
    const startTime = new Date().getTime();
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length-1; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j];
                 array[j] = temp;
            }
        }
    }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    return "Selection sort algorithm sorted array for " + elapsedTime + "miliseconds."
}
function insertionSort(array) {
    const startTime = new Date().getTime();
    for (let i = 1; i < array.length - 1; i++) {
        const temp = array[i];
        let j = i;
        while (j > 0 && array[j - 1] >= temp) {
            array[j] = array[j - 1];
            --j;
        }
        array[j] = temp;
    }
    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;
    return "Inesertion sort algorithm sorted array for " + elapsedTime + "miliseconds." 
}


console.log(bubbleSort(ourData))
console.log(selectionSort(ourData))
console.log(insertionSort(ourData))