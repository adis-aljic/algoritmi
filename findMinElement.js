function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }

    return array;
}   
const ourData = setData(10, 5, 30)
function findMin(array) {
    let minElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minElement) {
            minElement = array[i];
        }
    }
    return "U nizu " + array + " najmanji element je " + minElement;
}
console.log(findMin(ourData))