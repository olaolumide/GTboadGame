let charaInfo;
const goToBoard = document.getElementsByClassName('play');


/* The block of code snippet blow allow a player to elect characters and only two. */
function pickedPlayers(){ 
	const select = document.getElementsByName('meme');
	const loadCharacters = document.getElementById('loadCharacters');
	
	let selected = 0;
	for (let two = 0; two < select.length; two++){ 
		if(select[two].checked === true){
			selected = selected + 1; 				
		}
		else if(selected === 2){
		console.log(selected.value);
		loadCharacters.style.visibility = 'visible';				
		} 			
	}		 
	if (selected > 2){
	const error = document.getElementsByClassName('error').innerText = " You have selected more or less than two players ";
	
	alert('you have selected more than two.');
	relocate = window.location= board.html;
	slected.appendChild(relocate);
	loadCharacters.appendChild(selected);
	return loadCharacters.style.visibility = 'visible';		
	} 	
	
	
};
pickedPlayers();


const meme = document.getElementsByName('meme').value;
console.log(meme);
const picked = document.getElementsByClassName('selectCard');
console.log(picked);
picked.onclick = function restrivePlayer(){
	pickedPlayers();
	for(let i = 0; i < picked.length; i++){
		let pickedCharacter =  ' ';
		pickedCharacter = pickedPlayers[i].checked;
		
		
		pickedCharacter.innerHTML = '<a href="#" class="twoPlayers" > <img src="Sass/images/.jpg" class="playersDisplay" width="280" style="margin: 30px 20px; " >     </a>';
		
		console.log(pickedCharacter);
	}
}


/* The block of codes below Fech an API to display characters information and attached to the character selected. *//*
fetch("https://anapioficeandfire.com/api/characters/")
    .then(result => result.json())
    .then((jsonResult) => {
		getCharacters(jsonResult);
		//console.log(jsonResult);
    });
	
function getCharacters(characters){		
	for(c = 0; c < characters.length; c++){
		let charaDetails = " ";
		charaDetails += characters[c];
			
			
			//console.log(charaDetails);
			//let choosedPlayers = document.getElementsByClassName('.col-md-6');
			//console.log(choosedPlayers);
	}		
}*/



