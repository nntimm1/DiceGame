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


let d4;
let d6;
let d8;
let d10;
let d12;
let d20;
let dT;




function addTotalDice (num1,num2,num3,num4,num5,num6){
    let result = num1 + num2 + num3 + num4 + num5 + num6;
    return result;
}

let turnTotal = addTotalDice (dice4,dice6,dice8,dice10,dice12,dice20);

function rollDi(){
        d4 = Math.floor(Math.random() * 4) + 1;
        d6 = Math.floor(Math.random() * 6) + 1;
        d8 = Math.floor((Math.random() * 8) + 1);
        d10 = Math.floor((Math.random() * 10) + 1);
        d12 = Math.floor((Math.random() * 12) + 1);
        d20 = Math.floor((Math.random() * 20) + 1);
        let die4 = document.getElementById("dice4");
        let die6 = document.getElementById("dice6");
        let die8 = document.getElementById("dice8");
        let die10 = document.getElementById("dice10");
        let die12 = document.getElementById("dice12");
        let die20 = document.getElementById("dice20");
        let dT = document.getElementById("diceTotal");
        dT = d4 + d6 + d8 + d10 + d12 + d20;
        die4.innerHTML = d4;
        die6.innerHTML = d6;
        die8.innerHTML = d8;
        die10.innerHTML = d10;
        die12.innerHTML = d12;
        die20.innerHTML = d20;
        dT.innerHTML = dT; 
    }
