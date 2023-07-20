var random = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","./images/dice" +(random)+".png");
var random1 = Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","./images/dice" +(random1)+".png");
if(random>random1){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(random===random1){
    document.querySelector("h1").innerHTML="Match Draws";
}
else document.querySelector("h1").innerHTML="Player 2 wins";