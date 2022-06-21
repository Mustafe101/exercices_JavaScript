// you can write js here

console.log('exo-5');

var input = 'hello world';

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var resultArray =[];

input = input.toLowerCase()

for(let letter of input){
    console.log(letter);
    

    if(vowels.indexOf(letter) !== -1){
        console.log('its a vowel' + letter)
        resultArray.push(letter)
    }
    
}

resultArray = resultArray.join('').toUpperCase()
console.log(resultArray);