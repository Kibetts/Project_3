const moves = document.getElementById("moveCount");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".gameContainer");
const result = document.getElementById("result");
const controls = document.querySelector(".controls");

let tiles;
let timeInterval;
let activetTile = null;
let secondTile =false;

// items list

