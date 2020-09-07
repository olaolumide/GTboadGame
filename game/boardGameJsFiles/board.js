




//document.createElement = "div";

function myPlayers(){

	let container = document.getElementById('container');
	//console.log(container);	
			
		//container.insertAdjacentHTML('afterbegin', "<div class='uu'>I'm here </div>");
				//return slected.value
			
		let myPlayers = document.querySelector('myPlayers');
		//window.location = "board.html";
		
	
}
myPlayers();



//canvas setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let x = c.width / 2;
let y = c.height / 2;

function buildBoard(){
c.fillRect(0, 0, 25, 25);
c.fillRect(0, 50, 25, 25);
c.fillRect(0, 100, 25, 25);

c.fillRect(50, 0, 25, 25);
c.fillRect(100, 0, 25, 25);
c.fillRect(150, 0, 25, 25);
c.fillRect(200, 0, 25, 25);

c.fillRect(25, 25, 25, 25);
c.fillRect(75, 25, 25,25);
c.fillRect(125, 25, 25, 25);
c.fillRect(175, 25, 25, 25);
c.fillRect(225, 25, 25, 25);

c.fillRect(50, 50, 25, 25);
c.fillRect(100, 50, 25,25);
c.fillRect(150, 50, 25, 25);
c.fillRect(200, 50, 25, 25);

c.fillRect(25, 75, 25, 25);
c.fillRect(75, 75, 25,25);
c.fillRect(125, 75, 25, 25);
c.fillRect(175, 75, 25, 25);
c.fillRect(225, 75, 25, 25)

c.fillRect(50, 100, 25, 25);
c.fillRect(100, 100, 25,25);
c.fillRect(150, 100, 25, 25);
c.fillRect(200, 100, 25, 25);
c.fillRect(250, 100, 25, 25)

c.fillRect(25, 125, 25, 25);
c.fillRect(75, 125, 25,25);
c.fillRect(125, 125, 25, 25);
c.fillRect(175, 125, 25, 25);
c.fillRect(225, 125, 25, 25);
}
buildBoard();

/*Drawing the Tokins for the characters. */
const charaToken= 0;
function drawToken(charaSymbol){
	c.beginPath();
	c.rect(charaToken, 100, 10, 0, 2*Math.PI);
	c.fillStyle = "yellow";
	c.fill();
	c.closePath();
}
drawToken();

/*
let updateToken = setInterval(function(){
	c.clearRect(0, 0,  200, 200);
	charaToken(circlePath%200);
	circlePath++;
}, 5);*/
	


