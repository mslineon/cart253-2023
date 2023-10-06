
//  * Looking for Love
//  * Line On

"use strict";

let bg = { // create object values for the BG color
    r: 0,
    g: 0,
    b: 0
}

// LISTS *extra notes for myself
// make the heart 2 move differently
// 
let heart1 = { // create object values for the heart1 - controlled by user
    x: undefined,
    y: 250,
    size: 80,
    vx: 0,
    vy: 0,
    speed: 5
}

let heart2 = { // create object values for the heart 2 - not controlled by user
    x: undefined,
    y: 250,
    size: 80,
    vx: 0,
    vy: 0,
    speed: 3
}

let heartImg; // variables for image
let sadDroop = 0; // variable for sad text position (movement)
let state = 'title'; //variable to store the state, in this case we start with the title on screen
let myFont; // variable to store my font 
let noiseCount = 0; // variable for the movement of the heart 2

function preload() {
    heartImg = loadImage("assets/images/giphy.gif"); // load image of hearts
    myFont = loadFont('assets/fonts/YoungSerif-Regular.ttf'); // load the fonts to be use
  }


function setup() {
    createCanvas(windowWidth,windowHeight); //Set up canvas size
    createHeart();//Set up the value of the hearts movements
    noCursor();//remove the cursor display on screen
}


function createHeart () {  

    heart2.x = 2 * width/3; // initial position of heart 2 on the width
    heart2.vy = random(-heart2.speed,heart2.speed); // initial position of heart 2 on the height

        // heart1.x = width/3; // Define position of heart 1 on the x axis
        // heart1.vy = random(-heart1.speed,heart1.speed);
        // Define position of heart 2 on the x axis
        //Set uo the movement of the heart
        // heart1.vx = random(-heart1.speed,heart1.speed); 
        // heart2.vx = random(-heart2.speed,heart2.speed);
}

function draw() {

    gradientBg(); // animated gradient BG
    
    heart1.x = mouseX; // make heart1.x go to mousex
    heart1.y = mouseY; // same for heart1.y

    // check the state and run the function for each state
    if (state === `title`) {
        title(); // initiate playing sequence
      }
      else if (state === `simulation`) {
        simulation(); // hearts appears and move
      }
      else if (state === `love`) {
        love(); // when the hearts touch
      }
      else if (state === `sadness`) {
        sadness(); // when the heart get out the frame
        sadIsOff(); // extra function to check if sad is drooped off screen
      }
      else if (state === 'pain'){
        pain(); // secret area
      }
}



function title() { // this write the first frame title
    push(); 
    textFont(myFont); // use my font for title
    textSize(100); // make title big
    fill(120,153,212); // make title bluey
    textAlign(CENTER,CENTER); // put text middle
    text(`Press Any Key`,width/2,height/2); // display text
    pop();
}


function simulation(){ // This initiate the simulation
    move(); // this one makes the hearts move
    heartIsOff(); // see if heart is off
    touchingHearts(); // see if hearts touch
    displayHeart(); // show the hearts
}

function love() { // this is the love title found
    push();
    textFont(myFont); /// use my font
    textSize(64); // make font kind of big
    fill(255,150,150); // make text pink
    textAlign(CENTER,CENTER); // put text in center
    text(`Congratulation, you have been chosen`,width/2,height/2); //display text and put in middle
    pop();
  }

function sadness() { // this is the sad function
    background(200); // make BG gray
    textAlign(CENTER,CENTER); // text in center
    push(); // push later it makes the other text small
    sadDroop+=0.5; // this number goes up and so the text goes down
    textSize(74); // make font big
    fill(255); // make font white
    text(`SAD`,width/2,height/2+sadDroop); // put "sad" on screen, but make it slowly go down
    pop();
    text('better luck next time', width/2, 200); // tiny tiny font
}

function pain(){
    let strobe = random(2); // pick a random number between 0 and 2
    if (strobe > 1) { // if the number is bigger then 1
        background(0); // background is black
    }
    else{
        background(255); // else bg is white
    }
    
    push();
    textSize(255); // make text mega mega big
    textAlign(CENTER,CENTER); // text center
    fill(255); // text white
    text(`pain`,strobe*width/3,height/2);// show pain text that moves left and right
    pop();
}

function move() {
    // heart1.x += heart1.vx;
    // heart1.y += heart1.vy;
    noiseCount += 0.1; // need counter because noise needs its own number that always goes up
    heart2.x += heart2.vx + noise(noiseCount)*30-15; // add normal movement (vx) and noise but make the noise move 30 pixels, and then -15 to make it move left and right (instead of just right)
    heart2.y += heart2.vy + noise(noiseCount)*30-15; // same thing on y
}


function touchingHearts() {
    let d = dist(heart1.x, heart1.y, heart2.x, heart2.y); // check distance between hearts
    if (d < heart1.size/2 + heart2.size/2){ // if distance is small go to love state
        state = `love`;
    }
}

function sadIsOff(){ // check if sad text is off the screen
    if (sadDroop > height/2){ // if sad droop is bigger than the height/2 then initiate pain
    state = "pain"; // go to pain secret state
    }
}


function heartIsOff() { // check if heart is off screen
    if (heart1.x < 0 || heart1.x > width || heart1.y < 0 || heart1.y > height || heart2.x < 0 || heart2.x > width || heart2.y < 0 || heart2.y > height) {
        state = 'sadness'; // if its off go to sadness state
    }
}

function gradientBg (){ // extra function as requested
    background(bg.r,bg.g,bg.b);

    // make the color values go up by 1 every frame
    bg.r = bg.r + 1;
    bg.g = bg.g + 1;
    bg.b = bg.b + 1;

    // constrain colors to make background color good
    bg.r = constrain(bg.r,0,114); 
    bg.g = constrain(bg.g,0,114);
    bg.b = constrain(bg.b,0,171);
}

function displayHeart() {
    //ellipse(mouseX,mouseY,heart1.size);
    //ellipse(heart2.x,heart2.y,heart2.size); 
    image(heartImg, heart1.x-43, heart1.y-45, 85, 90); // display image instead of ellipse
    image(heartImg, heart2.x-43, heart2.y-45, 85, 90);
}



function keyPressed() {
    if (state === `title`){
        state = `simulation`;
    }
}



    





