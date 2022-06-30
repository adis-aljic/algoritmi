function sequentialSearch(array, data) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == data) {
            return true;
        }
    }
    return false;
}

console.log(sequentialSearch([1,2,3,4,5],3))