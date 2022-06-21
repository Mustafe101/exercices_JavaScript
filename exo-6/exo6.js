// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.



var team = {
_players: [{
    firstName:'ibro',
    lastName: 'qawlayste',
    age: 22
}],

_games: [{
    opponent: 'muhyo',
    teamPoints: 21,
    opponentPoints: 19,
}]
}
function addPlayer(first, last, age){
    var player={};
    player.firstName = first;
 	player.lastName = last;
	player.age = age;
    team._players.push(player);
    return player;
}



var newPlayer = addPlayer ('yaye', 'bigy', 24);
var newPlayerA = addPlayer ('daaha', 'tal', 19);
var newPlayerB = addPlayer ('timo', 'dhex', 22);


console.log(team._players);


















// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.