/**
 * Project 1 - Simulation
 * Line On
 */

"use strict";

let bgImg;

let state = `simulation`; // variable to store the state open screen 

let gameTimer = {
    secondsCounter: 30, 
    minuteCounter: 0,
    timeLeftState: true
};

let abiDog = {
    x: 0,
    y: undefined,
    size: 300,
    vx: 6,
    vy: 0,
    abiImg: undefined,
    scale: 1, // flipping img reference from p5js from a snail example: https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
    abiBoneImg: undefined,
    hasBone: false
};


let hand = {
    x: 0,
    y: 75,
    size: 140,
    vx: 10,
    vy: 0,
    handImg: undefined
};

let bone = {
    x: 0,
    y: -100,
    size: 100,
    vx: 0,
    vy: 2,
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
    abiDog.abiImg = loadImage("assets/images/Abigail.png");
    bone.boneImg = loadImage("assets/images/Bone.png");
    hand.handImg = loadImage("assets/images/Hand.png");
    ball.ballImg = loadImage("assets/images/Ball.png");
    abiDog.abiBoneImg = loadImage("assets/images/Abigail-bone.png");
    bgImg = loadImage("assets/images/Bg.jpeg");
}



function setup() {

    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER,CENTER); // put text middle
    abiDog.y = height/2;
    imageMode(CENTER);
    
    
}

function draw() {

    image(bgImg,0,0);

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
    //timerDisplay();
    // abiDogDisplay();
    // boneHandDisplay();
    // boneTouchAbi();
}

function failure() {

}

//Part of the simulation
function ballControl() {


}

function boneHandDisplay() {
    hand.x += hand.vx;
    bone.y += bone.vy;

    if (hand.x > width || hand.x < 0) {
        hand.vx = -hand.vx;
    }
    
    push();
    image(hand.handImg, hand.x, hand.y, hand.size, hand.size);
    pop();
    image(bone.boneImg,bone.x, bone.y,bone.size,bone.size);
}

function boneTouchAbi() {
    let d = dist(bone.x, bone.y, abiDog.x, abiDog.y);

    if (d < bone.size/4 + abiDog.size/4) {
        abiDog.hasBone = true;

    }
}

function keyPressed() {
        bone.x = hand.x; 
        bone.y = hand.y;
        abiDog.hasBone = false;
}

function timerDisplay() {
    gameTimer.secondsCounter -= 1/60; // 60 frame per 1 second 
    gameTime.minuteCounter = gameTimer.secondsCounter/60; // Minutes counting

    if (gameTimer.secondsCounter < 0) { // if the counter gets to zero then initiate the failure sequence
        state = `failure`;
        timeLeftState = false; // You ran out of time, haha too bad for you
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
    abiDog.x += abiDog.vx;

    if (abiDog.x > width || abiDog.x < 0) {
        abiDog.vx = -abiDog.vx;
        abiDog.scale = -abiDog.scale;
    }
    
    push();
    scale (abiDog.scale, 1); // flipping img reference from p5js from a snail example: https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb

    //
    if (abiDog.hasBone === false) {
        image(abiDog.abiImg, abiDog.x * abiDog.scale, abiDog.y, abiDog.size, abiDog.size);
    }
    else if (abiDog.hasBone === true) {
        image(abiDog.abiBoneImg, abiDog.x * abiDog.scale, abiDog.y, abiDog.size, abiDog.size);
        bone.x = width * 2;
    }
    pop();

}
