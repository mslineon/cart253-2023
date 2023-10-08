/**
 * Project 1 - Simulation
 * Line On
 */

"use strict";

let state = `simulation`; // variable to store the state open screen 

let gameTimer = {
    secondsCounter: 30, 
    minuteCounter: 0,
    timeLeftState: true
};

let abiDog = {
    x: 0,
    y: undefined,
    size: 50,
    vx: 1,
    vy: 0,
    abiImg: undefined
};

let hand = {
    x: 0,
    y: undefined,
    size: 35,
    vx: 1,
    vy: 0,
    handImg: undefined
};

let bone = {
    x: 0,
    y: 0,
    size: 30,
    vx: 1,
    vy: 0,
    boneImg: undefined
};

let ball = {
    x: 0,
    y: 0,
    size: 30,
    vx: 1,
    vy: 0,
    ballImg: undefined
};




function preload() {
    abiImg = loadImage("assets/images/Abigail.png");
    boneImg = loadImage("assets/images/Bone.png");
    handImg = loadImage("assets/images/Hand.png");
    ballImg = loadImage("assets/images/Ball.png");
}



function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER,CENTER); // put text middle
}

function draw() {

    background(255);

    if (state === `title`) {
        title();
    }
    else if (state === `explanation`) {
        explanation();
    }
    else if(state === `simulation`) {
        simulation();
    }
    else if(state === `failure`) {
        failure();
    }

    


}

function title(){
    push(); 
    textSize(100); // make title big
    fill(120,153,212); // make title bluey
    text(`WELCOME TO ABIGAME`,width/2,height/2); // display text
    textSize(50);
    text(`press any key to learn the controls`,width/2,height/2+70);
    pop();
}

function explanation(){
    push();
    textSize(45);
    fill(120, 153, 212);
    text(`space to drop the bones`, width/2, height/2 - 45);
    text(`click mouse to shoot the ball`, width/2, height/2);
    text(`press any key to start`, width/2, height/2 + 45);
    pop();

}

function simulation() {
    timerDisplay();
}

function failure() {

}

function ballControl() {


}

function boneControl() {

}

function timerDisplay() {
    gameTimer.secondsCounter -= 1/60; // 60 frame per 1 second 
    gameTime.minuteCounter = gameTimer.secondsCounter/60; // This is the minutes counting

    if (gameTimer.secondsCounter < 0) { // if the counter gets to zero then initiate the failure sequence
        state = `failure`;
        timeLeftState = false; // You ran out of time, haha to bad for you
    }
    
    // displaying time bottom left of the screen seconds & minute so it looks like a clock
    push();
    textAlign(LEFT); 
    text(round(gameTimer.secondsCounter), 70, height-50); // Use round to not display all extra milliseconds and more
    text(`:`, 65, height-50);
    text(round(gameTime.minuteCounter), 55, height-50);
    pop();
}

function scoreDisplay() {

}

function abiDogDisplay() {

}