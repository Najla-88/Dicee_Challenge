// var randomNumber1 = Math.floor(Math.random()*6) + 1 ;
// var randomNumber2 = Math.floor(Math.random()*6) + 1;

// document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
// document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").textContent = "🚩Player 1 wins!";
// }else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").textContent = "Player 2 wins! 🚩";
// }else if(randomNumber1 == randomNumber2){
//     document.querySelector("h1").textContent = "Draw!";
// }

// Angela code

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
    document.querySelector("hi").innerHTML = "Draw!";
} 