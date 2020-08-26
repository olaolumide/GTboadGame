var enemy;

function Enemy(enemyType, health, influence, speed, agility){
	this.enemyType = enemyType;
	this.health = health;
	this.influence = influence;
	this.speed = speed;
	this.agility = agility;
}
// The declaration above are the characteristics of the players.
const myTeam = document.getElementById('go');
//console.log(myTeam);
myTeam.addEventListener('click', function newPlayers(character){
	let interfacePlayers = document.getElementsByClassName('interface-player')[0].src;
	console.log(interfacePlayers);
})


