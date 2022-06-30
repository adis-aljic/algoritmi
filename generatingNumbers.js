
// numberOfElements - number of ellements we cant to create
// minNumber -        number from which we want to populate array
// maxNumber -        number to which we want to populate array
// (maxNumber - minNumber) - interval of numbers we want to populate array

function setData (numberOfElements, minNumber, maxNumber) {
    const array = [];
        for (let i = 0; i < numberOfElements; i++) {
             array[i] = Math.trunc(Math.random()*(maxNumber - minNumber) + minNumber); 
        }
    
    return array;
}
console.log(setData(10,1,10))

