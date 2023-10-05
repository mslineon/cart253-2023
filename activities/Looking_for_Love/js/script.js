
//  * Looking for Love
//  * Line On

"use strict";

let bg = { // create object values for the BG
    r: 0,
    g: 0,
    b: 0
};

let heart1 = { // create object values for the heart1
    x: undefined,
    y: 250,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 5
}

let heart2 = { // create object values for the heart 2
    x: undefined,
    y: 250,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 3
}

let state = 'title'; 


function setup() {

    createCanvas(windowWidth,windowHeight); //Set up canvas size
    createHeart();
}


function createHeart () {  
    
    heart1.x = width/3; // Define position of heart 1 on the x axis
    heart2.x = 2 * width/3;
    // Define position of heart 2 on the x axis

    //Set uo the movement of the heart
    heart1.vx = random(-heart1.speed,heart1.speed); 
    heart2.vx = random(-heart2.speed,heart2.speed);
    heart1.vy = random(-heart1.speed,heart1.speed);
    heart2.vy = random(-heart2.speed,heart2.speed);

}

function draw() {

    gradientBg();
    //background(0);

    if (state === `title`) {
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
      }
}


function title() {
    push();
    textSize(100);
    fill(120,153,212);
    textAlign(CENTER,CENTER);
    text(`LOVE?`,width/2,height/2);
    pop();
}


function simulation(){
    move();
    heartIsOff();
    touchingHearts();
    displayHeart();
}

function love() {
    push();
    textSize(64);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`LOVE!`,width/2,height/2);
    pop();
  }

function sadness() {
    push();
    textSize(74);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`SAD`,width/2,height/2);
    pop();
}

function move() {
    heart1.x += heart1.vx;
    heart1.y += heart1.vy;
    heart2.x += heart2.vx;
    heart2.y += heart2.vy;
}

function touchingHearts() {

    let d = dist(heart1.x, heart1.y, heart2.x, heart2.y);
    if (d < heart1.size/2 + heart2.size/2){
        state = `love`;
    }
}

function heartIsOff() {
    if (heart1.x < 0 || heart1.x > width || heart1.y < 0 || heart1.y > height || heart2.x < 0 || heart2.x > width || heart2.y < 0 || heart2.y > height) {
        state = 'sadness';
    }
}

function gradientBg (){
    background(bg.r,bg.g,bg.b);
    bg.r = bg.r + 1;
    bg.g = bg.g + 1;
    bg.b = bg.b + 1;

    bg.r = constrain(bg.r,0,114); 
    bg.g = constrain(bg.g,0,114);
    bg.b = constrain(bg.b,0,171);
}

function displayHeart() {
    ellipse(heart1.x,heart1.y,heart1.size);
    ellipse(heart2.x,heart2.y,heart2.size);  
}



function mousePressed() {
    if (state === `title`){
        state = `simulation`;
    }
}



    





