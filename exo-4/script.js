// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

var JS = "JavaScript"
secretMessage = secretMessage.filter(function(item) {
    return item !== "JavaScript"})
console.log(secretMessage)
//this block of code is to takeout the last word of the list

secretMessage.push( "to", "program");
console.log(secretMessage)
//this line of code is to add the 2 elements at the end of the array

secretMessage[6]= 'right'
console.log(secretMessage)
//this replaces 'easily' with 'right'

secretMessage.shift();
console.log(secretMessage)
//this line of code is to delete the first element 

secretMessage.unshift('Programming');
console.log(secretMessage)
//this adds 'programing' at the start of the array

secretMessage.splice(5, 5, 'know');
console.log(secretMessage)
//this replaces 'get' 'right' 'the' 'first' 'time'
console.log(secretMessage.join())