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
//var i;

var createCards = function(x)
{

	var boardGame = document.getElementById('game-board');

    for (var i=0; i<x; i++)
    {
   
       var cards = document.createElement("div");
       cards.className = "card";
       boardGame.appendChild(cards);
    
    };


};



