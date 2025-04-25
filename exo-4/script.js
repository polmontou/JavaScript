// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//1
secretMessage.pop();
//2
secretMessage.push('to','program');
//3
secretMessage[secretMessage.indexOf('easily')] = 'right';
//4
secretMessage = secretMessage.slice(1);
//5
secretMessage.splice(0,0,'Programming');
//6
secretMessage.splice(5,5,'know');
//7
console.log(secretMessage.join(' '));