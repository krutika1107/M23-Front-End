
	// Player name
	var player1 = "Player 1";
	var player2 = "Player 2";
	var player3 = "Player 3";
	var player4 = "Player 4";

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");
		player3 = prompt("Change Player3 name");
		player4 = prompt("Change player4 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
		document.querySelector("p.Player3").innerHTML = player3;
		document.querySelector("p.Player4").innerHTML = player4;
	}

// Function to roll the dice
function rollTheDice() {
	setTimeout(function () {
//player 01 setup  // generate random number 1-6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource = "images/dice" + randomNum1 + ".png";

// img[0] - 1st image update as per random number
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Player 2 setup
var randomNum2 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

// img[1] - 2nd image update as per random number
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Player 3 setup
var randomNum3 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource3 = "images/dice" + randomNum3 + ".png";

// img[2] - 3rd image update as per random number
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImageSource3);

// Player 4 setup
var randomNum4 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource4 = "images/dice" + randomNum4 + ".png";

// img[3] - 4th image update as per random number
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", randomImageSource4);

// Main Logic of Dice
if (randomNum1 === randomNum2) {
	document.querySelector("h1").innerHTML = "Draw!";
}

else if (randomNum1 < randomNum2) {
	document.querySelector("h1").innerHTML
		= (player2 + " WINS!");
}

else {
	document.querySelector("h1").innerHTML
		= (player1 + " WINS!");
}


//player 2-3

if (randomNum2 === randomNum3) {
	document.querySelector("h1").innerHTML = "Draw!";
}

else if (randomNum2 < randomNum3) {
	document.querySelector("h1").innerHTML
		= (player3 + " WINS!");
}

else {
	document.querySelector("h1").innerHTML
		= (player2 + " WINS!");
}


//player3-4

if (randomNum3 === randomNum4) {
	document.querySelector("h1").innerHTML = "Draw!";
}

else if (randomNum3 < randomNum4) {
	document.querySelector("h1").innerHTML
		= (player4 + " WINS!");
}

else {
	document.querySelector("h1").innerHTML
		= (player3 + " WINS!");
}

	}, 2500);
}