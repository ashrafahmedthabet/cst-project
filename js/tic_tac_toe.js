let turn = "X";
let boxes = document.querySelectorAll(".box");
let printTurn = document.getElementById("turn");
let printScoreX = document.getElementById("scoreX");
let printScoreY = document.getElementById("scoreY");
let scoreX = 0;
let scoreY = 0;
let drawGame = 0;
// turn X or turn Y
function handleTurn(element) {
  if (element.innerText == "" && turn == "X") {
    element.innerHTML = "X";
    turn = "O";
    element.style.cursor = "not-allowed";
    printTurn.innerHTML = "Turn " + turn;
    drawGame++;
  } else if (element.innerHTML == "" && turn == "O") {
    element.innerHTML = "O";
    turn = "X";
    element.style.cursor = "not-allowed";
    printTurn.innerHTML = "Turn " + turn;
    drawGame++;
  } else {
    alert("your press choosing Button ");
  }
}
// winner
function checkWinner() {
  if (
    boxes[0].innerHTML != "" &&
    boxes[0].innerHTML == boxes[1].innerHTML &&
    boxes[1].innerHTML == boxes[2].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[0].innerHTML;
    handlscore(boxes[0].innerHTML);
    handelEndGame();
  } else if (
    boxes[3].innerHTML != "" &&
    boxes[3].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[5].innerHTML
  ) {
    printTurn.innerHTML = "GG Win  " + boxes[3].innerHTML;
    handlscore(boxes[3].innerHTML);
    handelEndGame();
  } else if (
    boxes[6].innerHTML != "" &&
    boxes[6].innerHTML == boxes[7].innerHTML &&
    boxes[7].innerHTML == boxes[8].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[6].innerHTML;
    handlscore(boxes[6].innerHTML);
    handelEndGame();
  } else if (
    boxes[0].innerHTML != "" &&
    boxes[0].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[8].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[0].innerHTML;
    handlscore(boxes[0].innerHTML);
    handelEndGame();
  } else if (
    boxes[2].innerHTML != "" &&
    boxes[2].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[6].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[2].innerHTML;
    handlscore(boxes[2].innerHTML);
    handelEndGame();
  } else if (
    boxes[1].innerHTML != "" &&
    boxes[1].innerHTML == boxes[4].innerHTML &&
    boxes[4].innerHTML == boxes[7].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[1].innerHTML;
    handlscore(boxes[1].innerHTML);
    handelEndGame();
  } else if (
    boxes[0].innerHTML != "" &&
    boxes[0].innerHTML == boxes[3].innerHTML &&
    boxes[3].innerHTML == boxes[6].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[0].innerHTML;
    handlscore(boxes[0].innerHTML);
    handelEndGame();
  } else if (
    boxes[2].innerHTML != "" &&
    boxes[2].innerHTML == boxes[5].innerHTML &&
    boxes[5].innerHTML == boxes[8].innerHTML
  ) {
    printTurn.innerHTML = "GG Win " + boxes[2].innerHTML;
    handlscore(boxes[2].innerHTML);
    handelEndGame();
  } else if (drawGame == 9) {
    printTurn.innerHTML = "Oops! is Darw";
    handelEndGame();
  }
}
// handle end game 
function handelEndGame() {
  let restart = setInterval(function () {
    printTurn.innerHTML += " .";
  },500);
  let refresh = setTimeout(function () {
    clearInterval(restart);
    restartGame();
  }, 1800);
}
//score
function handlscore(element) {
  if (element == "X") {
    scoreX++;
    printScoreX.innerHTML = scoreX;
  } else {
    scoreY++;
    printScoreY.innerHTML = scoreY;
  }
}
//handle game
function handleGame(element) {
  handleTurn(element);
  checkWinner();
}

let resetButton = document.getElementById("btn-reset");

//reset game
resetButton.addEventListener("click", function () {
  turn = "X";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.cursor = "pointer";
  }
  printTurn.innerHTML = "Turn X";
  scoreX = 0;
  scoreY = 0;
  printScoreX.innerHTML = "---";
  printScoreY.innerHTML = "---";
  drawGame=0;
});
// restart game
function restartGame() {
  turn = "X";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.cursor = "pointer";
  }
  printTurn.innerHTML = "Turn X";
  drawGame=0;
}