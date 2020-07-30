var random1 = Math.random()*6;
random1 = Math.floor(random1) +1;
var randomDiceImage = random1 + ".jpg";
var img1 = document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage);

var random2 = Math.random()*6;
random2 = Math.floor(random2) +1;
var randomDiceImage2 = random2 + ".jpg";
var img2 = document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2);

if (random1>random2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(random2>random1){
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML = " Draw!!"
}
