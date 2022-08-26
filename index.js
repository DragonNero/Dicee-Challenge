function refresh() {
  var n = Math.random();
  var randomNumber1 = Math.round((n * 5) + 1);
  console.log(randomNumber1);

  var image1 = document.getElementById("img1");

  if (randomNumber1 === 1) {
    image1.setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 === 2) {
    image1.setAttribute("src", "images/dice2.png");
  }

  if (randomNumber1 === 3) {
    image1.setAttribute("src", "images/dice3.png");
  }

  if (randomNumber1 === 4) {
    image1.setAttribute("src", "images/dice4.png");
  }

  if (randomNumber1 === 5) {
    image1.setAttribute("src", "images/dice5.png");
  }

  if (randomNumber1 === 6) {
    image1.setAttribute("src", "images/dice6.png");
  }

  var m = Math.random();
  var randomNumber2 = Math.round((m * 5) + 1);
  console.log(randomNumber2);

  var image2 = document.getElementById("img2");

  if (randomNumber2 === 1) {
    image2.setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 === 2) {
    image2.setAttribute("src", "images/dice2.png");
  }

  if (randomNumber2 === 3) {
    image2.setAttribute("src", "images/dice3.png");
  }

  if (randomNumber2 === 4) {
    image2.setAttribute("src", "images/dice4.png");
  }

  if (randomNumber2 === 5) {
    image2.setAttribute("src", "images/dice5.png");
  }

  if (randomNumber2 === 6) {
    image2.setAttribute("src", "images/dice6.png");
  }
  if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
  }
  else if (randomNumber2 > randomNumber1 ) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
  }
  else (randomNumber2 = randomNumber1 ) {
    document.querySelector("h1").innerHTML="Drawn!";
  }
}
