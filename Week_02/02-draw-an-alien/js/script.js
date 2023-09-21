/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

// note for self: random 

/**
 * Alien project 
*/
function setup() { // only running the code one time

    //Practicing round 
    // createCanvas(640,480);
    // background(7, 219, 165);
    // arc(350, 240, 150, 200, 100, PI + QUARTER_PI, CHORD);


    //body
    createCanvas(640,480); // this is the canvas to create the image
    background(7, 219, 165); //This is the color of the BG
    //left ear
    strokeWeight(10);
    stroke(0);
    line(55, 145, 175, 145);
 
    //right ear
    strokeWeight(10);
    stroke(0);
    line(460, 145, 585, 145);

    fill(250, 250, 250); // Add color to the circle , last value is opacity
    noStroke();
    ellipse(320, 150, 350, 200); // shape, coordinate, size
    noStroke();
    ellipse(320,240, 300, 550); 


    //White eye
    fill(250);
    stroke(0);
    strokeWeight(10);
    ellipse(250, 150, 75);//left eye
    ellipse(400, 150, 75);//right eye

    //black eye
    fill(0);
    ellipse(250, 150, 20);
    ellipse(400, 150, 20);

    //mouth
    strokeWeight(10);
    stroke(0);
    line(275, 350, 375, 350);

    //ear
    // noStroke();
    // // quad(100, 90, 150, 100, 50, 38, 14, 50);


     //Round antenna
     fill(250);
     ellipse(55, 145, 50);//left antenna
     ellipse(585, 145, 50);//right antenna


        // note for line - don't undo after this 
 

// Below this is the example of the bezier curve

// noFill();
// stroke(250);
// bezier(85, 20, 10, 10, 90, 90, 15, 80);

}


/**
 * Description of draw()
*/
function draw() { // running the piece of code again and again

    // below is the example of the interactive mouse
    // createCanvas(640,480); // this is the canvas to create the image
    // background(7, 219, 165); //This is the color of the BG
    // fill(219, mouseX, mouseY, 100); // Add color to the circle, the mouse X & 
    // // ellipse(320,140, 300, 200); // shape, coordinate, size
    // noStroke();
    // ellipse(mouseX, mouseY, random(200)); // shape, coordinate, the randomize the Y
}