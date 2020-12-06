
var name1 = prompt("Enter player 1 name ");
var name2 = prompt("Enter player 2 name ");

document.querySelector("p").innerHTML = name1;


document.getElementById("naa").innerHTML = name2;

var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randonDiceImage = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randonDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randonDiceImage = "dice" + randomnumber2 + ".png";

var randomImageSource2 = "images/" + randonDiceImage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource2);

// document.querySelector("p").innerHTML = "Player 2 wins";


if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = name1 + " wins";

}
else if (randomnumber2 >randomnumber1) {
    document.querySelector("h1").innerHTML = name2 + " wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
