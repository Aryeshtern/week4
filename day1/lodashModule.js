const lodash = require('lodash');

const fs = require("fs");

class manipulateFile {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async readFile() {
        try {
            const data = await fs.promises.readFile(this.filePath, "utf-8");
            return data;
        } catch (error) {
            console.error(`Error reading file: ${error}`);
            return null;
        }
    };

    printFile() {
        this.readFile()
           .then((data) => {
                if (data) {
                    console.log(data);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    };

    printNumOfWords() {
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    console.log(`Number of words: ${words.length}`);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    };

    printFileToreverse() {
        this.readFile().then((data) => {
            if(data){
                const reverseWords = lodash.reverse(data.split('')).join('');
                console.log(`Reverse words: ${reverseWords}`);
            }
        });
    };

    printOnlyUniques() {
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    const uniqueWords = lodash.uniq(words);
                    console.log(`Unique words: ${uniqueWords.join(', ')}`);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    };

    printNumOfUniques() {
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    const uniqueWords = lodash.uniq(words);
                    console.log(`Number of unique words: ${uniqueWords.length}`);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    };

    printOnlyUniquesInUppercase() {
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    let upperWords = words.map((word) => word.toUpperCase());
                    const uniqueWords = lodash.uniq(upperWords);
                    console.log(`Unique words in uppercase: ${uniqueWords.join(', ')}`);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
        
    };

    printUniqesGreatherThen5Letters() {
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    const uniqueWords = lodash.uniq(words);
                    const filteredWords = uniqueWords.filter((word) => word.length > 5);
                    console.log(`Words with unique letters and more than 5 letters: ${filteredWords.join(', ')}`);
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    };

    printNumOfVowelsUniqesInEveryWord(){
        this.readFile()
           .then((data) => {
                if (data) {
                    const words = data.split(" ").filter((word) => word);
                    let vowels ="";
                    let vowelsCount = [];
                    words.forEach(word => {
                        vowels = lodash.uniq(word.split('')).map(l => l.match(/[oaiehu]/g));
                        if (vowels.length > 0){
                            vowelsCount.push(`{word: '${word}', vowelCount: ${vowels.toString().replace(/,/g, "").length}}\n`);
                        }
                        
                    })
                    console.log(`Vowels Count : ${vowelsCount}`);
                    
                }
            })
           .catch((error) => console.error(`Error reading file: ${error}`));
    }


}

module.exports = manipulateFile;



