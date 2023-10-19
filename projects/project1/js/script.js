/**
 * Project 1 - Simulation
 * Line On
 */

"use strict";

let bgImg; // image Background
let happyFont; // font for simulation, title & explanation
let sadFont; // font for last frame
let barkFx;// sound for abi bark (Pippin sound used from tutorial)
let scaryFx; // sound from stock 
let state = `title`; // variable to store the state open screen 

let gameTimer = { // Game timer object
    secondsCounter: 45, // number of seconds, we can change this value
    size: 60, // font size
    x: 50, // position on the x axis
    y: undefined
};

let abiDog = { // abigail object 
    x: 0,
    y: undefined,
    size: 300,
    vx: 6,
    vy: 0,
    abiImg: undefined,
    scale: 1, // flipping img reference from p5js from a snail example: https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
    abiBoneImg: undefined,
    hasBone: false,
    amountBones: 0 // Variable storing the initial amount of bone - This is the initial amount of bone abi has a the beginning of the game
};

let hand = { // object js for the hand moving at the top
    x: 0,
    y: 75,
    size: 140,
    vx: 10,
    vy: 0,
    handImg: undefined
};

let bone = { // object js for the bone 
    x: 0,
    y: -100,
    size: 100,
    vx: 0,
    vy: 2,
    boneImg: undefined
};

function preload() { 
    //load images
    abiDog.abiImg = loadImage("assets/images/Abigail.png"); 
    bone.boneImg = loadImage("assets/images/Bone.png");
    hand.handImg = loadImage("assets/images/Hand.png");
    abiDog.abiBoneImg = loadImage("assets/images/Abigail-bone.png");
    bgImg = loadImage("assets/images/Bg.jpeg");
    // load fonts
    happyFont = loadFont("assets/fonts/GT-Maru-Mega-Midi-Trial.otf");
    sadFont = loadFont("assets/fonts/MercuBolScrMT.otf");
    barkFx = loadSound("assets/sounds/bark.wav");
    scaryFx = loadSound("assets/sounds/cringe-scare.mp3");
}

function setup() {
    frameRate(60); // frame rate to make the animation not lag and go slow (p5js reference https://p5js.org/reference/#/p5/frameRate)
    createCanvas(windowWidth, windowHeight); // canvas at the size of the windows
    textAlign(CENTER,CENTER); // put text middle in general
    abiDog.y = height/2; // position abigail at the middle of the height 
    imageMode(CENTER); // place image background at the center
    gameTimer.y = height-50; 
    strokeWeight(2);
    stroke(0);
}

function draw() {//moving from frame (title, explanation, simulation, failure)
    noCursor(); 
    image(bgImg,width/2,height/2); // place image background
    // This is the story how the function will unfold
    if (state === `title`) { 
        title(); // first frame, title of the game
    }
    else if (state === `explanation`) {
        explanation(); // explain how to play the game
    }
    else if(state === `simulation`) {
        simulation(); // start the simulation game
    }
    else if(state === `failure`) {
        failure(); // end of game frame
    }
}

function title(){ // display the first frame title of the game
    push(); // this happen inside of the push/pop only
    textFont(happyFont); 
    textSize(100); // make title big
    fill(255); // make title white
    text(`WELCOME TO ABIGAME`,width/2,height/2 - 45); // display text
    textSize(55); // second text size
    text(`press any key to learn how to play`,width/2,height/2 + 50);
    pop(); // text underneath to direct the users
}

function explanation(){ // display how to play the game
    push();
    textFont(happyFont);
    fill(255);
    textSize(80);
    text(`Play with Abigail the dog`, width/2, height/2 - 100);
    textSize(45); // big title to play with Abi
    text(`Press any key to drop the bones for her to catch`, width/2, height/2); // text how to play
    text(`She has to catch 5 bones in 45 secondes for her to be happy`, width/2, height/2 + 50); // text rules
    textSize(35); 
    text(`Open your sound and press any key to start, good luck`, width/2, height/2 + 180); // text to initiate game
    textSize(20);
    text(`Disclaimer, no dog has been harmed in the process. Many treats has been given for compensation.`, width/2, height/2 + 380);
    pop();
}

function simulation() { // the game! What's in the game hehe 
    timerDisplay(); // timer at the bottom left
    abiDogDisplay(); // display of abigail
    boneHandDisplay(); // bone & hand display
    boneTouchAbi(); // abi & bone display 
    scoreDisplay(); // bar score at the bottom right
}

function failure() { // whenever the time is up, display end of game
    push();
    scaryFx.play(); // scary sound playing
    background(0); // bg colors is black
    textFont(sadFont); // using the scary font
    fill(255); // font color white
    textSize(140); //font size big
    translate(random(20), 0); // shaky fonts
    // BAD MOM text
    text(`YOU'RE A BAD MOM!`,width/2,height/2);
    text(`YOU LOST`,width/2,height/2 - 340);    
    textSize(100); // size small
    fill(216,0,50); // font color red
    text(`She deserves better`,width/2,height/2 + 320);
    text(`You're going to jail`,width/2,height/2 + 220);
    text(`You're a horrible person`,width/2,height/2 - 120);
    text(`She'll die because of you`,width/2,height/2 - 220);
    text(`You are not worth it`,width/2,height/2 + 120);
    pop();
}

//Part of the simulation

function boneHandDisplay() {
    hand.x += hand.vx; // hand movement from right & left screen
    bone.y += bone.vy; // bone movement from right & left screen
    if (hand.x > width || hand.x < 0) {
        hand.vx = -hand.vx; // whenever goes right or left of the width, then we make it move back and forth
    }
    image(hand.handImg, hand.x, hand.y - 10, hand.size, hand.size); // display the image of the hand
    image(bone.boneImg,bone.x, bone.y,bone.size,bone.size); // display the image of the bone
}

function boneTouchAbi() { 
    let d = dist(bone.x, bone.y, abiDog.x, abiDog.y); // store the distance in between abi & bone
    if (d < bone.size/4 + abiDog.size/4) { // if both touches
        abiDog.hasBone = true; // then make the image of abi with bone appear
        abiDog.amountBones += 1; // Variable to count the number of bone abi has AKA the points
        barkFx.play();
    }
}

function keyPressed() { 
    if (state === `title`) { 
        state = `explanation`; // press to show explanation from title
    }
    else if (state === `explanation`) { // from explanation, we press and start the game
        state = `simulation`;
    }
    else if (state === `simulation`) { // when we press during the simulation, then the bone drop from hand
        bone.x = hand.x; // bone at the position of hand
        bone.y = hand.y; // bone height at the position of hand height
        abiDog.hasBone = false; // when we press on the key, then we reinitiate the bone dropping from hand
    }
    else if (state === `failure`) {
        state = `title`; // when we press and are at the last frame, we reinitiate the game
        resetGame(); // resetting the game 
    }
}

function resetGame() {  // randomly resetting the game assets after completed
    gameTimer.secondsCounter = 45; //reset counter to 45
    bone.x = width * 2; // hide the bone outside of screen
    hand.x = random(width); // put the hand in random spot
    abiDog.x = random(width); // put abi in random spot
    abiDog.hasBone = false; // image to abi without bone
    abiDog.amountBones = 0; // reset amount of bones
    scaryFx.stop(); // stop the music when resetting
}

//Display the timer to stress out the user
function timerDisplay() {
    gameTimer.secondsCounter -= 1/30; // remove 30 frame per 1 second, if we calculate 30 fps 
    if (gameTimer.secondsCounter < 0) { // if the counter gets to zero then initiate the failure sequence
        state = `failure`;
    }
    push(); // displaying time bottom left of the screen seconds & minute so it looks like a clock
    textAlign(LEFT); // alignment
    textFont(happyFont); // font use
    fill(255); // color
    textSize(gameTimer.size); // size link to my js object
    text(`Timer`, gameTimer.x, gameTimer.y);// displaying word timer (https://p5js.org/reference/#/p5/round)
    text(round(gameTimer.secondsCounter), gameTimer.x + 175, gameTimer.y); //  display the timer going down from 45 secondes (see object js) & use round to not display all extra milliseconds and more
    pop();
}

function scoreDisplay() { // display the bones caught by abi with loops function
    for (let i = 0; i < abiDog.amountBones; i ++) {
        image(bone.boneImg, width - 70 - i * 80, height - 75, bone.size, bone.size); // This display the amount as images of the bones abi caught
    }
}

function abiDogDisplay() {
    abiDog.x += abiDog.vx; // movement of abi
    if (abiDog.x > width || abiDog.x < 0) { 
        abiDog.vx = -abiDog.vx;// make abi move back and forth on the screen
        abiDog.scale = -abiDog.scale; // make abi turn around back and forth on the screen
    }
    push();
    scale (abiDog.scale, 1); // flipping img reference from p5js from a snail example: https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb
    if (abiDog.hasBone === false) { // this is just the image of abigail
        image(abiDog.abiImg, abiDog.x * abiDog.scale, abiDog.y, abiDog.size, abiDog.size); 
    }
    else if (abiDog.hasBone === true) {
        image(abiDog.abiBoneImg, abiDog.x * abiDog.scale, abiDog.y, abiDog.size, abiDog.size); // whenever abi touch bone, then the image of abi & bone appear
        bone.x = width * 2; // hidding the bone offscreen
    }
    pop();
}


