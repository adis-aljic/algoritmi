/*  Create an array of over 10,000 randomly generated integers and sort the array using
both Quicksort and the JavaScript built-in sorting function, timing each function.
Is there a time difference between the two functions? */

function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}
const ourData = setData(1000000, 1, 10)

function quickSort(array) {
    let startTimeQS = new Date().getTime()
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
    let endTimeQS = new Date().getTime()
    let differenceQS = endTimeQS - startTimeQS
    return "Quicksort algorithm sorted array for " + differenceQS + " miliseconds."
}


console.log(quickSort(ourData))

let startTime = new Date().getTime()
ourData.sort((a,b)=> a-b)
let endTime = new Date().getTime()
let difference = endTime - startTime
console.log("Quicksort algorithm sorted array for " + difference + " miliseconds.");


