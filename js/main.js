var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
]
var cardsInPlay = [];
var currentScore = 0

var updateScore = function(win){
	if (win = true){
		currentScore++;
		document.getElementsByClassName('score')[0].textContent = "Score: " + currentScore;
	}
}

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		var win = false
		if (cardsInPlay[0] === cardsInPlay[1]){
			win = true
			alert("You found a match!");
		}else{
			win = false
			alert("Sorry try again :(");
		}
		updateScore(win);
	}
}

var flipCard = function(){

	var cardID = this.getAttribute('data-id');

	this.setAttribute('src',cards[cardID].cardImage);

	console.log("User flipped " + cards[cardID].rank);

	cardsInPlay.push(cards[cardID].rank);

	checkForMatch();

	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		cardElement.style.marginLeft = "20px";
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.querySelector('img');
		document.getElementById('game-board').removeChild(cardElement);
	}
	cardsInPlay = [];
	createBoard();
}

document.getElementById('resetButton').addEventListener('click',resetBoard);


createBoard();


