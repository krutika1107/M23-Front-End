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


// Main Logic of Dice
if(randomNum1 > randomNum2)
{
document.querySelector("h1").innerHTML = "Player 1 Wins !"
}
else if (randomNum2 > randomNum1 )
{
  document.querySelector("h1").innerHTML = "Player 2 Wins !"
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}
