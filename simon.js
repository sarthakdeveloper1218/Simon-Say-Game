let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});
// White Flash By Game
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout( function () {
        btn.classList.remove("gameFlash")
    }, 250);
}
// Green Flash on User Click
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout( function () {
        btn.classList.remove("userFlash")
    }, 250);
}
// Function for Level Up
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}
// Checking Answer
function checkAns(indx) {
    if(userSeq[indx] === gameSeq[indx]) {
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Game Over ! Your Score was ${level}, Press Any key to Start Again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

// On button press 
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}