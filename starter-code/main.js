console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

/*if (cardTwo == cardThree)
{
	alert('You have found a match!');
};
}
else
{
	alert('Sorry, try again')
}*/

 var boardGame = document.getElementById("game-board");
//var i;

var createCards = function()
{

	for (var i=0; i<4; i++)
	{
		console.log('hello');

	   var cards = document.createElement("div");
	   cards.className = "card";
	   boardGame.appendChild(cards);

	 
	}


};




