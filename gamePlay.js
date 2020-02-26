"use strict";
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let playerFiveScore = 0;
let playerSixScore = 0;
let playerSevenScore = 0;
let playerEightScore = 0;
let playerNineScore = 0;
let playerTenScore = 0;

let playerOneStatus = false;
let playerTwoStatus = false;
let playerThreeStatus = false;
let playerFourStatus = false;
let playerFiveStatus = false;
let playerSixStatus = false;
let playerSevenStatus = false;
let playerEightStatus = false;
let playerNineStatus = false;
let playerTenStatus = false;

let dice4 = Math.min(Math.max(parseInt(number), 1), 4);
let dice6 = Math.min(Math.max(parseInt(number), 1), 6);
let dice8 = Math.min(Math.max(parseInt(number), 1), 8);
let dice10 = Math.min(Math.max(parseInt(number), 1), 10);
let dice12 = Math.min(Math.max(parseInt(number), 1), 12);
let dice20 = Math.min(Math.max(parseInt(number), 1), 20);

function rollDice() {
    
}

function addTotalDice (dice4,dice6,dice8,dice10,dice12,dice20){
    let result = dice4 + dice6 + dice8 + dice10 + dice12 + dice20;
    return result;
}

addTotalDice ()