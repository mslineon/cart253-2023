/**
 * Activities - Covid-19
 * Line On

 */

// Display the COVID-19 circle and move it across the screen, starting at a random y
// Make the COVID-19 circle move back to the left if it goes off the right side
// Display the user circle at the mouse location
// Check if the two circles overlap and, if they do, stop the program
// Display random static in the background for a visual flourish
// Hide the mouse cursor

"use strict";

// we created the objects and defined the background
let bg = {
    r: 0,
    g: 0,
    b: 0,
    speed: 0.5
}

// we created the objects and defined the circle that we cannot move
let circleRed = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 6,
        g: 0,
        b: 132
    }
}

// we created the objects and defined the circle that I am controlling
let userCircle = {
    x: 0,
    y: 0,
    size: 50,
    vx: 3,
    vy: 3,
    fill: 0,
    speed: 10
}

let numbStatic = 10000; // grains for background

let displayLine = 0; // object values for the line in the background

let myDog; // my pretty abigail aka my dog

function preload() {
  myDog = loadImage("assets/images/Abibi.jpeg");
}

function setup() {
    
    createCanvas(windowWidth,windowHeight); // This set up the set of my canvas to be at the height & width of the window displayed
    circleRed.x = random(0, width); // The position on the Y axis will be random
    circleRed.y = 0;
    circleRed.vy = -circleRed.speed; // Object Property to match its speed property, so that it will move to the right

    // noCursor(); 

}


function draw() {

    background(bg.r,bg.g,bg.b); // This is the background color

    bg.r = bg.r + bg.speed;
    bg.g = bg.g + bg.speed;
    bg.b = bg.b + bg.speed;

    bg.r = constrain(bg.r,0,79);
    bg.g = constrain(bg.g,0,73);
    bg.b = constrain(bg.b,0,63);

    displayLine = displayLine - 1; // this make the line moves from bottom to top
    
    image(myDog, mouseX, mouseY, 85, 90); // image following the mouse

    if (displayLine < 0) { 
         displayLine = height; // this is the single line
    }
    
    stroke(255,100); // This is the stroke of the line & transparency

    for (let i = 0; i < 55; i++) { // this is the repeat of the single line above
        let lineDisplace = height/55 * -i + displayLine; // this divide the screen height to see how far appart we want the line to be divided them & then we add the line movement
        if (lineDisplace < 0) { // if the position of the line is smaller than the top of the canvas AKA 0
            lineDisplace += height; // then we add the height back to the bottom of the canvas
        }
        line(0, lineDisplace, width, lineDisplace); // this draw the line white line
    }
    

    for (let i = 0; i < numbStatic; i ++) { // we start with i = 0, then we add point everytime the code execute, and this happen until i = 100 - then there will be a 100 point

        let x = random(0, width);
        let y = random(0,height);
        stroke(255);
        point(x,y);

    }
   
    // userCircle.x = mouseX + userCircle.x/2; // My mouse direct the circle on the x axis
    // userCircle.y = mouseY + userCircle.y/2; // My mouse direct the circle on the y axis

    fill(userCircle.fill); // color of my Circle (user Circle)
    ellipse(userCircle.x,userCircle.y,userCircle.size); // This draw the circle


    if (mouseX > userCircle.x) { // if mouseX is bigger than the position of the circle at the x position
        userCircle.vx = 1; // then the mouvement of the circle goes to 1
      }

        else if (mouseX < userCircle.x) { // inverse of the above
        userCircle.vx = -1;
      }

    if (mouseY > userCircle.y){ // if mouseY is bigger than the position of the circle at the height position
        userCircle.vy = 1; // then the mouvement of the circle is equal 1
    }
        else if (mouseY < userCircle.y){ // inverse of the above
            userCircle.vy = -1;
        }

    if (mouseX > userCircle.x){
        userCircle.vx = userCircle.speed/2; // control of the speed of the circle
    }

    userCircle.x = userCircle.x + userCircle.vx; // mouvement of the circle on the width axis
    userCircle.y = userCircle.y + userCircle.vy; // mouvement of the circle on the height axis
    
    

    // fill(255);
    // line(circleRed.x, circleRed.y, userCircle.x, userCircle.y);
    let d = dist(userCircle.x, userCircle.y, circleRed.x, circleRed.y);

    if (d < circleRed.size/2 + userCircle.size/2) { // if the circle touches
        userCircle.size = 150; // then my circle becomes bigger
    }
        else if (d > circleRed.size/2 + userCircle.size/2){
            userCircle.size = 50;
        }
    

    circleRed.x = circleRed.x + circleRed.vx; // Circle move from left to right
    circleRed.y = circleRed.y + circleRed.vy; // we set up the speed to be at the same pace at the velocity of y
    // circleRed.x += circleRed.speed;

    if (circleRed.y < 0) { // if statement with a condition that when the circle get to the right side, it jump back to the left side of the screen at a random value
        circleRed.x = random(0,width); // jump back at a random value of the height position
        circleRed.y = height    ; // jump back at the x position of 0

    
        // circleRed.vx = -circleRed.vx;
    }

    fill(circleRed.fill.r, circleRed.fill.g, circleRed.fill.b); // this is the color of the moving red circle
    noStroke();
    ellipse(circleRed.x, circleRed.y, circleRed.size); // This draw the red moving circle


    stroke(255); // color stroke
    line(circleRed.x,circleRed.y,userCircle.x,userCircle.y); // the famous line that links everything together. fun
}

function mousePressed() {
    // When the mouse button is pressed, move the circle to the mouse position
    userCircle.x = mouseX;
    userCircle.y = mouseY;
  }

  // thank you!
