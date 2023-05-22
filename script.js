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