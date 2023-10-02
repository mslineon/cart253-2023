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

// we created the objects and defined the circle
let circleRed = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
}


let userCircle = {
    x: 0,
    y: 0,
    size: 100,
    fill: 255
}

let numbStatic = 5000;


function setup() {
    
    createCanvas(windowWidth,windowHeight); // This set up the set of my canvas to be at the height & width of the window displayed
    circleRed.y = random(0, height); // The position on the Y axis will be random
    circleRed.vx = circleRed.speed; // Object Property to match its speed property, so that it will move to the right
    noCursor(); 

}



function draw() {

    background(0); // Baground color

    for (let i = 0; i < numbStatic; i ++) { // we start with i = 0, then we add point everytime the code execute, and this happen until i = 100 - then there will be a 100 point

        let x = random(0, width);
        let y = random(0,height);
        stroke(255);
        point(x,y);

    }
    

    userCircle.x = mouseX; // My mouse direct the circle on the x axis
    userCircle.y = mouseY; // My mouse direct the circle on the y axis
    fill(userCircle.fill); // color of my Circle (user Circle)
    ellipse(userCircle.x,userCircle.y,userCircle.size); // This draw the circle

    // fill(255);
    // line(circleRed.x, circleRed.y, userCircle.x, userCircle.y);
    let d = dist(userCircle.x, userCircle.y, circleRed.x, circleRed.y);

    if (d < circleRed.size/2 + userCircle.size/2) { // if the circle touches, the loop stop
        noLoop();
    }



    circleRed.x = circleRed.x + circleRed.vx; // Circle move from left to right
    circleRed.y = circleRed.y + circleRed.vy; // we set up the speed to be at the same pace at the velocity of y
    // circleRed.x += circleRed.speed;

    if (circleRed.x > width) { // if statement with a condition that when the circle get to the right side, it jump back to the left side of the screen at a random value
        circleRed.x = 0; // jump back at the x position of 0
        circleRed.y = random(0,height); // jump back at a random value of the height position
    
        // circleRed.vx = -circleRed.vx;
    }

    fill(circleRed.fill.r, circleRed.fill.g, circleRed.fill.b); // this is the color of the moving red circle
    noStroke() 
    ellipse(circleRed.x, circleRed.y, circleRed.size); // This draw the red moving circle

     
}