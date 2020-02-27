"use strict";
let round1Players = [{id:"2-1"},{id:"2-2"},{id:"2-3"},{id:"2-4"},{id:"2-5"},{id:"2-6"},{id:"2-7"},{id:"2-8"},{id:"2-9"},{id:"2-10"}];
let round2Players = [{id:"3-1"},{id:"3-2"},{id:"3-3"},{id:"3-4"},{id:"3-5"},{id:"3-6"},{id:"3-7"},{id:"3-8"},{id:"3-9"},{id:"3-10"}];
let round3Players = [{id:"4-1"},{id:"4-2"},{id:"4-3"},{id:"4-4"},{id:"4-5"},{id:"4-6"},{id:"4-7"},{id:"4-8"},{id:"4-9"},{id:"4-10"}];
let round4Players = [{id:"5-1"},{id:"5-2"},{id:"5-3"},{id:"5-4"},{id:"5-5"},{id:"5-6"},{id:"5-7"},{id:"5-8"},{id:"5-9"},{id:"5-10"}];
let round5Players = [{id:"6-1"},{id:"6-2"},{id:"6-3"},{id:"6-4"},{id:"6-5"},{id:"6-6"},{id:"6-7"},{id:"6-8"},{id:"6-9"},{id:"6-10"}];
let round6Players = [{id:"7-1"},{id:"7-2"},{id:"7-3"},{id:"7-4"},{id:"7-5"},{id:"7-6"},{id:"7-7"},{id:"7-8"},{id:"7-9"},{id:"7-10"}];






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
let diceTotal;

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
        let dT = (d4 + d6 + d8 + d10 + d12 + d20);
        let diceTotal = document.getElementById("diceTotal");
        die4.innerHTML = d4;
        die6.innerHTML = d6;
        die8.innerHTML = d8;
        die10.innerHTML = d10;
        die12.innerHTML = d12;
        die20.innerHTML = d20;
        diceTotal.innerHTML = dT; 
    }

    function submitScore(){
        for (var i = 0 ; i < round1Players.length; i++)
        if ([i] ="0" ){
            console.log(diceTotal)
            // round1Players[i] = document.getElementById("2-1").innerHTML = "DiceToTal"
            break
        }
        else{
            i++;
        };
    }


function playerRound(){
 for (var i=0; i<playersList.length; i++){
    if([i]=0){
        rollDi();
    }

 }
 
 
}
