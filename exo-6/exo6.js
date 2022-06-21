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


var newPlayer = new addPlayer ('yaye', 'bigy', 24);
var newPlayerA = new addPlayer ('daaha', 'tal', 19);
var newPlayerB = new addPlayer ('timo', 'dhex', 22);
var newPlayerB = new addPlayer ('musk', 'og', 20);


console.log(team._players);

function addGame(opponent, teamPoint, opponentPoints){
    var game = {}; 
    game.opponent = opponent;
	game.teamPoints = teamPoint;
	game.opponentPoints = opponentPoints;
    team._games.push(game);
}


var newGame = new addGame('livik',6,1);
var newGame1 = new addGame('sanhok',3,2);
var newGame2 = new addGame('erengle',4,1);
var newGame2 = new addGame('vikendi',5,2);


console.log(team._games);
console.log(team)


var totalPoints = 0;
var totalOpponentPoints = 0;

for(var i=0; i<team._games.length;i++){
	totalPoints = totalPoints + team._games[i].teamPoints;
	}

for(var i=0; i<team._games.length;i++){
	totalOpponentPoints = totalOpponentPoints + team._games[i].opponentPoints;
	}

function oldestPlayer(){
	var agePlayer = 0;
	for(var i=0; i<team._players.length;i++){
		var newAgePlayer = team._players[i].age;
			if(newAgePlayer > agePlayer){
				agePlayer = newAgePlayer;
		}
	}
	console.log(agePlayer);
}

function alphaPlayer(){
	var namePlayers = [];
	for(var i=0; i<team._players.length;i++){
		var playerName = team._players[i].firstName;
		namePlayers.push(playerName);
		}
	namePlayers.sort();
	console.log(namePlayers);
}

console.log('total team points ' + totalPoints);
console.log("tatal average points " + totalOpponentPoints/team._games.length);
oldestPlayer();
alphaPlayer();