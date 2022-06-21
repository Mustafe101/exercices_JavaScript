// you can write js here
console.log('exo-2');

const registred = true;
const runnerAge     = 18;
const raceNumber = Math.floor(Math.random()*1000);
if (registred === true && runnerAge >= 18){
    console.log('You will race at 9:30 am')
}else if (registred === true || runnerAge >= 18){
    console.log(raceNumber + 'You will race at 11:00 am')
}else if (!registred || runnerAge <= 18) {
    console.log( raceNumber + 'You will race at 12:30 pm')
}
else (!registred || runnerAge < 18)
    console.log('Go to see the registration desk')
