console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129]

function arraySum(arr) {
    let sum = 0; 
    arr.forEach((number) => {
        sum += number;
    });
    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};  
book.title = "The Hunger Games";
book.pages = "356 pages";
book.readCount = 3;

console.log(book);
 book.info = function (){
     return `${this.title} is ${this.pages} and has been read ${this.readCount} times. `
 }

 console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
       let reverseWord = letters.join("");
       result.push(reverseWord);
    }
    return result.join(" ");
}

console.log(reverseWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function converter(fileData) {
    let rows = fileData.split("\n");
    let headers = rows[0].split(",");

    let result = [];

    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        rows[i].split(","); 
    let data = rows[i].split(",");
    data.forEach((val, idx) => {
        obj[headers[idx]] = val;
    });
    result.push(obj);
}

return result;

}

console.log(converter(csvData));