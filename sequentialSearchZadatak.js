function generateNumbers(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        const number = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber)
        array.push(number);
    }
    return array
}
const ourData = generateNumbers(10, 20, 40)

function sequentialSearch(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return "U nizu " + array + " broj " + number + " se nalazi na mjestu " + i;
            // return "Niz " + array + "  sadrzi broj " + number;
            
        }
    }
    return "Niz " + array + " ne sadrzi broj " + number;
}

console.log(sequentialSearch(ourData, 30))