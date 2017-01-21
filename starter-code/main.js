//console.log("JS file is connected to HTML! Woo!")
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];


//var cardOne = "king";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "queen";

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

/*var createCards = function() //function to create cards
{

	var boardGame = document.getElementById("game-board"); 
    // stores "game-board" into varialble boardGame
    for (var i=0; i<4; i++) // for loop to create cards
    {
   
       var cards = document.createElement("div"); // creates an element called cards and is assigned as a div
       cards.className = "card"; // cards gets assigned a ClassName "card" - CSS Clas creates card
       boardGame.appendChild(cards); // appends - adds list "card" to boardGame
    
    };
};*/


var createBoard = function(){

var board = document.getElementById("game-board"); 
 
 for (var i = 0; i<cards.length; i++) {
   var cardElement = document.createElement("div"); 
   // creates variable cardElement and assigngs it as a div element
   cardElement.className = "card"; // assigns cardElement div with a Classname of card
   cardElement.setAttribute("data-card",cards[i]); 
   // cardElement gets assigned a "data card" name and assigned a value from cards[];
   board.appendChild(cardElement);
   cardElement.addEventListener("click", isTwoCards);
 };

};


var isTwoCards = function() {
 //alert("hello");
  cardsInPlay.push(this.getAttribute("data-card"));
  
  console.log(this.getAttribute("data-card"));

  if (this.getAttribute("data-card") === "king") {
	this.innerHTML = "<img src='king.png' alt='king of hearts'/>" ; } 
		else {
	this.innerHTML = "<img src='queen.png' alt='queen of hearts'/>";
  };


  if (cardsInPlay.length === 2){
  	isMatch(cardsInPlay);
  	cardsInPlay = [];
  };
};

var isMatch = function(cards) {

  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  };
};

createBoard;

window.addEventListener("load", createBoard);
// automatically calls function to create the board game when window is laoded




