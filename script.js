const gameContainer = document.querySelector(".game-general");
const timeValue = document.getElementById("time");
const stopButton = document.getElementById("stop");
const result = document.getElementById("result");
const startButton = document.getElementById("start");
const controls = document.querySelector(".controls-container");
const moves = document.getElementById("moves-count");
let tiles;
let interval;
let activeTile = false;
let secondTile = false;

const pictures = [
  { name: "bishop", image: "./bishop.png" },
  { name: "king", image: "./king.png" },
  { name: "knight", image: "./knight.png" },
  { name: "pawny", image: "./pawny.png" },
  { name: "queen", image: "./queen.png" },
  { name: "rook", image: "./rook.png" },
 
];
const generateRandom = (size = 4) => {
    let tempList = [...pictures];
    let cardValues = [];
    size = (size * 3) / 2;
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tempList.length);
      cardValues.push(tempList[randomIndex]);
      tempList.splice(randomIndex, 1);
    }
    return cardValues;
  };
  let seconds = 0,
  minutes = 0;

let movesCount = 0,
  winCount = 0;

const timeGenerator = () => {
  seconds += 1;
  
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
 
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};
const matrixGenerator = (cardValues, size = 4) => {
	gameContainer.innerHTML = "";
	cardValues = [...cardValues, ...cardValues];
	
	cardValues.sort(() => Math.random() - 0.5);
	for (let i = 0; i < size * 3; i++) {
	 
	  gameContainer.innerHTML += `
	   <div class="card-container" data-card-value="${cardValues[i].name}">
		  <div class="card-before">*</div>
		  <div class="card-after">
		  <img src="${cardValues[i].image}" class="image"/></div>
	   </div>
	   `;
	}
	const movesCounter = () => {
		movesCount += 1;
		moves.innerHTML = `<span>Moves:</span>${movesCount}`;
	  };
	
	  gameContainer.style.gridTemplateColumns = `repeat(${4},auto)`;