
function myPlayers(){
	var p = document.getElementsByName('me');
	var chosenPlayer = 0;
	var count;
	
	for(count = 0; count < p.length; count++){
		if( p[count].checked === true ){
			chosenPlayer = chosenPlayer	 + 1;
		}
	}	
	if(chosenPlayer > 2){
		document.getElementById('notTwo').innerHTML = "You Have selected Less or More than two players. Select Two Players."
		return false;
	}
}
	


const ControlRoom = {
	
	setGameStart: function myPlayers (classType){				
		this.resetPlayers(classType);
		this.setPreFight();		
	},
	
	resetPlayers: function(classType, houseHold){		
		//controlRoom.filter(controlRoom => controlRoom > 3);
		//console.log(getInterface);
		switch(classType){
			
			case "SANSA"  :
			player  = new Players(classType);
			break;
			
			case "DAENERYS": 
			player  = new Players(classType);
			break;
			
			case "JAIME" :
			player  = new Players(classType);
			break;
			
			case "CERSEI":
			player  = new Players(classType );
			break;			
			
			case "BRIENNE":
			player  = new Players(classType, 216, 'Brienne of Tarth', true, " ", [], 'The Maid of Tarth, Brienne the Beauty, Brienne the Blue', 'In 280 AC', " ",  'Null', 'Null', 'Null', [], [380,17,362], [2,3,8], [5], ['Gwendoline Christie'], ['Seasons 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],);
			break;
			
			case "JORAH" :
			player  = new Players(classType);
			break;
			
			case "ARYA":
			player = new Players(classType );			
			break;
			
			case "JON":
			player  = new Players(classType );
			break;
			
			case "Tyrion":
			player  = new Players(classType);
			break;	
			
			default: ('You must choose two players');
		}

		//Here is displaying chosen players.
		var playersPresentation = document.querySelector('.leadContainer');
		const getInterface = document.querySelector(".interface");
		
		getInterface.innerHTML = '<a href="#" class="twoPlayers" > <img src="images/' + classType.toUpperCase() + '.jpg" class="playersDisplay" width="280" style="margin: 30px 20px; " > <div style=" " > <h3> ' + classType + '</h3>  <p>Id: ' + player.id +'</p>   <p>Name: '+ player.name +' </p> <p>Culture: '+ player.culture +' </p> <p>IsFemale: '+ player.isFemale +' </p> <p>Title: '+ player.title +' </p> <p>Aliases: '+ player.aliases +' </p> <p>Born: '+ player.born +' </p> <p>Died: '+ player.died +' </p> <p>Father: '+ player.father +' </p> <p>Mother: '+ player.mother +' </p> <p>Spouse: '+ player.spouse +' </p> <p>Children: '+ player.children +' </p> <p>Allegiances: '+ player.allegiances +' </p> <p>Books: '+ player.books +' </p> <p>PovBooks: '+ player.povBooks +' </p> <p>PlayedBy: '+ player.playedBy +' </p> <p>TvSeries: '+ player.tvSeries +' </p> </div>    </a>';
		
		/*function getRandomPlayers(min, max){
		var firstPlayer = max - min +2;
		var secondPlayer = Math.random() * firstPlayer;
		var selectedPlayers = Math.floor(secondPlayer) + min;
		
		console.log(selectedPlayers);
		
		return selectedPlayers;*/
		
	},
	// Here is setting the stage for the game.

	setPreFight: function(){
		const getHeader = document.querySelector('.header');
		const getAction = document.querySelector('.actions');
		const getArena = document.querySelector('.arena');	
		const getEnemy = document.querySelector('.enemy');
		//getHeader.innerHTML = '<p>Task: Find an enemy! </p>';
		getAction.innerHTML= '<a href="#" class="btn-prefight" onclick="ControlRoom.setFight()" style="color: white; text-align: center; " > <div class"enemy" style="padding: 5px; background: red; width:15%; margin: auto; "> Retreive Island. </div> </a>';		
	},
	setFight: function(){ 
		const getHeader = document.querySelector('.header');
		const getAction = document.querySelector('.actions');
		const getEnemy = document.querySelector('.enemy');
		//Create enemy!
		const enemyOn = new Enemy("Cersi", 250, 400, 150, 400);
		const enemyOff = new Enemy("Jaime", 400, 250, 400, 150);
		const chooseAnyEnemy = Math.floor(Math.random() * Math.floor(2));		
		switch (chooseAnyEnemy){
			case 0:
			enemy = enemyOn ;
			break;
			
			case 1:
			enemy = enemyOff ;
			break;
			
		}
		//getHeader.innerHTML = '<p>Task: Conquer The Island That Stands in Your Way. </p>';
		getAction.innerHTML = '<a href="finale.html" class="btn-prefight" onclick="playerMoves.calcAttack()" > Fight! </a>';
		
		
		getEnemy.innerHTML = '<img src="images/enemyImages/.jpg"  class="playersDisplay" > <div> <h3> Enemies</h3>		<p>Health: ' + enemy.health + '</p><p>Agility: '+ enemy.agility +'</p> <p>Speed: '+ enemy.speed +' </p><p>Influence: '+ enemy.influence +' </p></div>';
	}

}


