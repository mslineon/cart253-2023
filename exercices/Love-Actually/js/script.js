
//  * Looking for Love
//  * Line On

"use strict";

let bg = { // create object values for the BG
    r: 0,
    g: 0,
    b: 0
};

// LISTS:
// make the heart 2 move differently
// 
let heart1 = { // create object values for the heart1
    x: undefined,
    y: 250,
    size: 80,
    vx: 0,
    vy: 0,
    speed: 5
}

let heart2 = { // create object values for the heart 2
    x: undefined,
    y: 250,
    size: 80,
    vx: 0,
    vy: 0,
    speed: 3
}

let heart_img;
let sad_droop = 0;
let state = 'title';
let myFont;
let noise_count = 0;

function preload() {
    heart_img = loadImage("assets/images/giphy.gif");
    myFont = loadFont('assets/fonts/YoungSerif-Regular.ttf');
  }


function setup() {
    createCanvas(windowWidth,windowHeight); //Set up canvas size
    createHeart();
    noCursor();
}


function createHeart () {  
    
    // heart1.x = width/3; // Define position of heart 1 on the x axis
    heart2.x = 2 * width/3;
    // Define position of heart 2 on the x axis
    //Set uo the movement of the heart
    // heart1.vx = random(-heart1.speed,heart1.speed); 
    // heart2.vx = random(-heart2.speed,heart2.speed);
    heart1.vy = random(-heart1.speed,heart1.speed);
    heart2.vy = random(-heart2.speed,heart2.speed);

}

function draw() {

    gradientBg();
    //background(0);
    heart1.x = mouseX;
    heart1.y = mouseY;

    if (state === `title`) { // this allows to create the simulation
        title();
      }
      else if (state === `simulation`) {
        simulation();
      }
      else if (state === `love`) {
        love();
      }
      else if (state === `sadness`) {
        sadness();
        sadIsOff();
      }
      else if (state === 'pain'){
        pain();
      }
}



function title() { // this write the first frame title
    push();
    textFont(myFont);
    textSize(100);
    fill(120,153,212);
    textAlign(CENTER,CENTER);
    text(`Press Any Key`,width/2,height/2);
    pop();
}


function simulation(){ // This initiate the simulation
    move();
    heartIsOff();
    touchingHearts();
    displayHeart();
}

function love() { // this is the love title found
    push();
    textFont(myFont);
    textSize(64);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`Congratulation, you have been chosen`,width/2,height/2);
    pop();
  }

function sadness() {
    background(200);
    textAlign(CENTER,CENTER);
    push();
    sad_droop+=0.5;
    textSize(74);
    fill(255);
    text(`SAD`,width/2,height/2+sad_droop);
    pop();
    text('better luck next time', width/2, 200);
    
}

function pain(){
    let strobe = random(2);
    if (strobe > 1) {
        background(0);
    }
    else{
        background(255);
    }
    
    push();
    textSize(255);
    textAlign(CENTER,CENTER);
    fill(255);
    text(`pain`,strobe*width/3,height/2);
    pop();
}

function move() {
    // heart1.x += heart1.vx;
    // heart1.y += heart1.vy;
    noise_count += 0.1;
    heart2.x += heart2.vx + noise(noise_count)*30-15;
    heart2.y += heart2.vy + noise(noise_count)*30-15;
    
}




function touchingHearts() {
    let d = dist(heart1.x, heart1.y, heart2.x, heart2.y);
    if (d < heart1.size/2 + heart2.size/2){
        state = `love`;
    }
}

function sadIsOff(){
    if (sad_droop > height/2){
    state = "pain";
    }
}


function heartIsOff() {
    if (heart1.x < 0 || heart1.x > width || heart1.y < 0 || heart1.y > height || heart2.x < 0 || heart2.x > width || heart2.y < 0 || heart2.y > height) {
        state = 'sadness';
    }
}

function gradientBg (){ // extra function
    background(bg.r,bg.g,bg.b);

    bg.r = bg.r + 1;
    bg.g = bg.g + 1;
    bg.b = bg.b + 1;

    bg.r = constrain(bg.r,0,114); 
    bg.g = constrain(bg.g,0,114);
    bg.b = constrain(bg.b,0,171);
}

function displayHeart() {
    //ellipse(mouseX,mouseY,heart1.size);
    //ellipse(heart2.x,heart2.y,heart2.size); 
    image(heart_img, heart1.x-43, heart1.y-45, 85, 90);
    image(heart_img, heart2.x-43, heart2.y-45, 85, 90);
}


function mousePressed() {
    // When the mouse button is pressed, move the circle to the mouse position
    heart1.x = mouseX;
    heart1.y = mouseY;
  }

function keyPressed() {
    if (state === `title`){
        state = `simulation`;
    }
}



    





