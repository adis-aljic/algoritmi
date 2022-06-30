function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }

    return array;
}   
const ourData = setData(10, 5, 30)
function findMax(array) {
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    return "U nizu " + array + " najveci element je " + maxElement;
}
console.log(findMax(ourData))