const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function binSearch(array, data) {
    let upperBound = array.length-1;
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
    return "U nizu " + array + " element " + data + " nalazi se na indeksu " + mid
    }
    }
    return "Element is not in array."
}
console.log(binSearch(array,11))