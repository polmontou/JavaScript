// you can write js here

console.log('exo-5');
let input = prompt("Votre phrase :","Strings only");
const vowels = ["a","e","i","o","u","y"];
let resultArray = [];

for (letter of input) {
    if (vowels.includes(letter.toLowerCase())) {
        resultArray.push(letter.toLowerCase());
    }
}

console.log(resultArray.join("").toUpperCase());

/*OU SINON :

resultArray = [];
let inputSplit = input.split("");

resultArray = inputSplit.map(letter => {
        if (vowels.includes(letter.toLowerCase())) {
            return letter.toLowerCase();
        }
    })    
console.log(resultArray.join("").toUpperCase());*/

/*OU SINON : 
resultArray = [];
let inputSplit = input.split("");

resultArray = inputSplit.filter(letter => {
    return vowels.includes(letter.toLowerCase()); 
    })    
console.log(resultArray.join("").toUpperCase());*/
