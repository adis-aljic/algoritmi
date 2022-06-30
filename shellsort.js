function setData(numberOfElements, minNumber, maxNumber) {
    const array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[i] = Math.trunc(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    return array;
}


const ourData = setData(10, 1, 10)
console.log(ourData)

function shellsort(array, gaps) {
    for (let g = 0; g < gaps.length; g++) {
        const gap = gaps[g];
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            for (let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
                array[j] = temp;
            }
            //  u programu u knjizi array[j] = temp; se nalazi na ovoj liniji ali nije tu definisana
                // nasao sam i program ispod sto je zakomentarisan ali ne radi
        }
    }
    return array
}
console.log(shellsort(ourData, [5, 3, 1]))


// function shellsort(array, n) {

//     for (let i = 1; i < n; i++) {
//         j = i;
//         temp = array[i];
//         while (j > 0 && temp < array[j - 1]) {
//             array[j] = array[j - 1];
//             j--;
//         }
//         array[j] = temp;
//     }
//     return array;
// }
// console.log(shellsort(ourData, 7))