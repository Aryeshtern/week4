// const fs = require('fs');

// // Read the JSON file
// fs.readFile('./day1/data.txt', 'Utf-8', function(err, data) {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(data);
// })

const manipulateFile = require('./lodashModule');

const myFile = new manipulateFile('./data.txt');

//myFile.printFile();

//myFile.printNumOfWords();

//myFile.printFileToreverse();

//myFile.printOnlyUniques();

//myFile.printNumOfUniques();

//myFile.printOnlyUniquesInUppercase();

myFile.printNumOfVowelsUniqesInEveryWord();








