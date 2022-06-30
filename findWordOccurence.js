const importTxtFile = (txtFile) => {        //  funkcija za importovanje txt fajla
    const { count } = require('console');
    const { readFileSync, promises: fsPromises, copyFile } = require('fs');
    const { prependOnceListener } = require('process');
    const { addAbortSignal } = require('stream');
    const { threadId } = require('worker_threads');
    const contents = readFileSync(txtFile, 'utf-8');
    return contents.split(" ");
}
let words = importTxtFile("text.txt")


function findWordOccurence(array, data) {
    let counter = 0
    for (let i = 0; i < array.length; ++i) {
        if(array[i] == data){
            counter++;
        }
    }

    return "Rijec " + data + " u tekstu se ponavlja " + counter + " puta."

}


console.log(findWordOccurence(words, "The"))