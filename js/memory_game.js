const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

let cards;
let timer;
let firstCard = false;
let secondCard = false;

const images = [
    { name: "a", image: "../images/a.png" },
    { name: "b", image: "../images/b.png" },
    { name: "e", image: "../images/e.png" },
    { name: "i", image: "../images/i.png" },
    { name: "m", image: "../images/m.png" },
    { name: "s", image: "../images/s.png" },
    { name: "v", image: "../images/v.png" },
    { name: "z", image: "../images/z.png" },
];

let seconds = 0, minutes = 0, movesCount = 0, winCount = 0;

const matrixGenerator = function (cardValues){
    for (let i = 0; i < 16; i++) {
        gameContainer.innerHTML += '<div class="card-container" data-card="' + cardValues[i].name + '"> <div class="card-before">?</div><div class="card-after hide"><img src="' + cardValues[i].image + '" width="70px" class="image"/></div></div >';
    }

    gameContainer.style.gridTemplateColumns = "repeat(4,auto)";

    // images handler
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                card.firstElementChild.classList.add("hide");
                card.lastElementChild.classList.remove("hide");
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card");
                } else {
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card");
                    if (firstCardValue == secondCardValue) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        firstCard = false;
                        winCount += 1;
                        if (winCount == Math.floor(cardValues.length / 2)) {
                            result.innerHTML = "<h2>You Won</h2><h4>Moves: " + movesCount + "</h4>";
                            stopGame();
                        }
                    } else {
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        setTimeout(() => {
                            tempFirst.firstElementChild.classList.remove("hide");
                            tempFirst.lastElementChild.classList.add("hide");

                            tempSecond.firstElementChild.classList.remove("hide");
                            tempSecond.lastElementChild.classList.add("hide");
                        }, 700);
                    }
                }
            }
        });
    });
};

//Start game
startButton.addEventListener("click", () => {
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");

    timer = setInterval(timeGenerator, 1000);

    reset();
});


// timer handler
function timeGenerator() {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? "0" + seconds : seconds;
    let minutesValue = minutes < 10 ? "0" + minutes : minutes;
    timeValue.innerHTML = "<span>Time:</span><span>" + minutesValue + ":" + secondsValue + "</span>";
}

// move counter
function movesCounter() {
    movesCount += 1;
    moves.innerHTML = "<span>Moves:</span><span>" + movesCount + "</span>";
}

// stop the game
stopButton.addEventListener("click", stopGame);
function stopGame() {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(timer);
}

// reset all results
function reset() {
    gameContainer.innerHTML = "";
    result.innerText = "";
    moves.innerHTML = "<span>Moves:0</span>";
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
}

//get random images
function generateRandom() {
    let randImages = [];
    let cardValues = [];
    for (let index = 0; index < images.length; index++) {
        randImages.push(images[index])
    }
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * randImages.length);
        cardValues.push(randImages[randomIndex]);
        randImages.splice(randomIndex, 1);
    }
    for (let index = 0; index < images.length; index++) {
        randImages.push(images[index])
    }
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * randImages.length);
        cardValues.push(randImages[randomIndex]);
        randImages.splice(randomIndex, 1);
    }
    cardValues.sort(() => Math.random() - 0.5);
    return cardValues;
}


