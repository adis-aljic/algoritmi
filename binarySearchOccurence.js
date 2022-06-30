const array = [1, 2, 3, 4, 5, 11, 6, 7, 8, 9, 11, 10, 11, 12, 13, 14]

function binSearchOccurence(array, data) {
    let upperBound = array.length - 1;
    let lowerBound = array[0];
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);
        if (array[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (array[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            let element = array[mid]
            let counter = 0
            console.log(element);
            for (let i = 0; i < array.length; i++) {
                if (element == array[i]) {
                    counter++;
                }
            }
            return "Broj " + data + " u nizu " + array + " ponavlja se " + counter
                + " puta."
        }
    }
}
console.log(binSearchOccurence(array, 11))