/**
Line On
Jungle Garden
 */

"use strict";


let gravityForce = 0.0025; // downward acceleration of the bouncing for the ball

let paddle; // js object variable for paddle

let balls = []; // array to store the number of balls
let numBalls = 20; // defining the number of ball

let wigglers = []; // array to store the number of the stars
let numWigglers = 10; // defining the number of stars
let deadState = false; // state of the dead frame

function setup() {
    createCanvas (windowWidth, windowHeight); // canvas size
    paddle = new Paddle (300,20); // paddle object from the class paddle 

    for (let i = 0; i < numBalls; i++) { // loops to count & store the number of ball
        let x = random(0, width); // pick new random x position
        let y = random(-400, -100); // pick new random y position
        let ball = new Ball(x,y); // ball object from ball class
        balls.push(ball); // add the ball to the ball array

    }

    for (let j = 0; j < numWigglers; j++) {
        //let x = random(0, width);
        //let wiggler = new DeadlyWiggle (x);
        //let wiggler = new DeadlyWiggle (random(0, width));
        //wiggler.push(wiggler);
        wigglers.push(new DeadlyWiggle(random(0, width))); // logic to write this code above in only one line = random position, create the new star wiggler with that postition, and add it into the array as defined by the numbWiggler (10) above
    }
}

function draw() {
    background(0); // bg color
    paddle.move(); // run the move function from paddle class
    paddle.display(); // run the display function from the paddle class
    
    for (let j = 0; j < wigglers.length; j ++) { // loop through all the wigglers
        let wiggler = wigglers[j]; // pull 1 wiggler out of the array
        wiggler.display(); // run the wiggler funtion from wiggle class
        if (wiggler.checkCollision(paddle) === "lose") { // run check collision fonction from the class wiggler, and if it return "lose"
            //console.log("you dead");
            deadState = true; // frame of deadstate appear - set deadstate to true - later will check the deadstate
        }
        else { // if not, then we check if the star gets out of the screen
            if (wiggler.passedYouBy(height)) { // stars get out of the windows, then we remove it from the array (splice)
                wigglers.splice(j, 1); // if star gets out the frame, then we remove 1 from the array
            }
        }
    }

    for (let i = 0; i < balls.length; i ++) { 
        let ball = balls[i]; // for each ball in the array, we retrieve it in the array
        if (ball.active) { // check if the ball is active 
            if (!deadState){ // check if I haven't lost then,
                ball.gravity(gravityForce); //run the gravity of the ball
                ball.move(); // run the movement of the ball
                ball.bounce(paddle); // check if it hits paddle, then it bounces up. 
            }
            ball.display(); // show the ball on screen, I still want to keep the ball but doesn't want it to disapear when the game is over.
        }
    }

    if (deadState){ // elements of the lose screen
        fill(255); // colors of the font
        textSize(50); // size of the font
        textAlign(CENTER); // aligment of the font
        text(`You lose`, width/2, height/2); // text to write for the lose
    }
    else if (wigglers.length <= 0) {
        winning(); // if all the stars are off the screen then you win.
    }
    else { // explanation screen
        fill(255); // colors of the font
        textSize(30); // size of the font
        textAlign(CENTER); // aligment of the font
        text(`don't let the yellow wiggly wigglers stars touch you`, width/2, 40); // text to write for the explanation
        text(`just move the mouse to move the paddle, it's the only control I promised *wink wink* ;)`, width/2, 80); // text to write for the explanation, hide the star killing game mechanic mouhahaha
    }
}

function mousePressed() { // hidding game controls
    for (let j = 0; j < wigglers.length; j ++) { // whenever we click on the stars, it disapear
        let wiggler = wigglers[j]; // looping through all the stars to see if I clicked it
        if (wiggler.touched(mouseX, mouseY)) { // Function in class for the wiggler to check if the mouse touched the stars
            wigglers.splice(j, 1);  // then it delete it from the array
        }
    }
}

function winning() { // elements of the winning frame - very simple I have a headaches to think more about doing something original. I am pretty much lazy at this point. sorry! 
    fill(0);
    rect(0,0, width, height); // cheating here, covering the screen with a full rectangle, because I am lazy at this point. sorry again for this frame. 
    fill(255);
    text(`You win my friend, but at what cost`, width/2, height/2);
}