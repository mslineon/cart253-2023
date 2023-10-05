/**
 * Functions - Week 05
 * Line

 */

"use strict";

// let circle = {
// x: 0,
// y: 250,
// size: 100,
// vx: 1,
// vy: 0
// }


function preload() {
    
}



function setup() {
    createCanvas(windowWidth,windowHeight);
}


/**
 * Description of draw()
*/
function draw() {

    background(0);

    parallels(0, 200, 100, 1, 100, 4); // x, y position, number of lines, thickness, line height, line spacing
    parallels(0, 300, 20, 10, 50, 12);
    parallels(0, 350, 80, 5, 5, 6);
}

//     move();
//     wrap();
//     display();
// }


// function move (){ // function to move the circle
//         circle.x = circle.x + circle.vx;
//         circle.y = circle.y + circle.vy;
// }   

// function wrap (){ // function to make the circle fo back
//     if (circle.x > windowWidth) {

//          reset();
//     }
// }
// function display (){ // function to display the circle
//     fill(255,0,0);
//     ellipse(circle.x,circle.y,circle.size);
// }
// function mousePressed() { // when the mouse is pressed, then we run the reset function defined below
//     reset();
//   }

// function reset (){ // we are defining the reset function here
//     circle.x = 0;
//     circle.vx = circle.vx + 1;
//     circle.size = circle.size + 5;
// }

function parallels(x,y,numLines,lineThickness,lineHeight,lineSpacing) {

    for (let i = 0; i < numLines; i++) { // repeatition
    // We use the numLines parameter in our for-loop to determine how many
    // lines we will draw in the loop
    // let x = 50; // the function has already been declared at line 79, so we can remove it here
    // let y = 250;
    // for (let i = 0; i < 20; i++) { // The for function for repeatition start at 0, smaller than 20, we add 1
    // Drawing style
        noStroke();
        let lineFill = map(i, 0, numLines, 0, 255);
        fill(lineFill);
        rectMode(CENTER);
    // Draw a 2x50 rectangle at the current position
        rect(x, y, lineThickness, lineHeight);
    // Increase x so the next rectangle is to the right
     x = x + lineSpacing;
    }
}

