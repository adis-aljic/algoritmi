const importTxtFile = (txtFile) => {
    let temp = [];

    const { count } = require('console');
    const { readFileSync, promises: fsPromises, copyFile } = require('fs');
    const { prependOnceListener } = require('process');
    const { addAbortSignal } = require('stream');
    const { threadId } = require('worker_threads');
    const contents = readFileSync(txtFile, 'utf-8');
    return contents.split(" ");
   
}
let words = importTxtFile("text.txt")


function findWord(array, data) {
    for (var i = 0; i < array.length; ++i) {
    if (array[i] == data) {
    return "Rijec " + data + " je " + i + " rijec u tekstu.";
    }
    }
    return "Word is not found in text";
   }

console.log(findWord(words,"voice"))