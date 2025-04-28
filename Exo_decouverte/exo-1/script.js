
// you can write js here
console.log('hello from file');
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
let celsius = kelvins - 273;
let fahrenheits = Math.floor(celsius*(9/5)+32); //formule pour passer des degrés celsius aux fahrenheits, le Math.floor() permet d'obtenir le + grand entier < au résultat trouvé par le calcul

console.log(`${kelvins} degrés kelvins donnent ${celsius} degrés celsius et ${fahrenheits} degrés fahrenheit.`)