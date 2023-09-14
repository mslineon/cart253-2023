/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// create 2 variables to store the x and y offset that we will use to animate the ellipse in the draw function
var anim_x, anim_y;


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

    // set size of canvas
    createCanvas(500, 500);
    // set background colour
    background(50,250,210);

    // Set rectMode (center uses x and y as the center of the rect)
    rectMode(CENTER);
    // remove outline and set fill
    noStroke();//Camel Case (when Capitalize letters)
    fill(250,45,100,50);
    // draw rectangle in the middle of the canvas
    rect(width/2,height/2,100,100);
    
    // set stroke cplor and weight, and fill color
    stroke(250,235,208);
    strokeWeight(2);
    fill(184,235,208,100);

    // default ellipse mode is CENTER
    // draw ellipse a bit to the left of our rectangle
    ellipse(width/2-150,height/2,100,100);

    // run a function I made to draw some shapes from the shapes tutorial
    // line_1();  // commented out so we don't run it, but its there if we need it

    

}


/**
 * Description of draw()
*/
function draw() {
    // draw functipn runs once every frame
    // using_the_draw_function()

    //line_1();
}

// create new function called line_1
function line_1() {
    // draw some lines
    line(0,0,width,height);
    line(0,height,width,0);
    // draw an ellipse
    ellipse(width/2,height/2,100,100);
}

function using_the_draw_function() {
    // this is some code written by someone else to help me learn

    background(50,20); // first number sets the color (0 black 255 white), second number sets alpha / opacity
    fill(240);
    // Use the two variables we made earlier
    // frameCount is the number of frames since the program started
    // using sin and cos will give us polar coordinates on the edge of a unit cirle
    // we multiply both of them by 200 to make our circle bigger.
    // we multiply frameCount by 2 different numbers to get a phasing effect where the shape of the circle slowly changes

    anim_x = sin(frameCount * 0.05)* 200;
    anim_y = cos(frameCount * 0.051)*200;
    stroke(0);
    ellipse(width/2 + anim_x, height/2 + anim_y, 50, 50);

    // you can run any function from inside any other function (with some exceptions I'll explain later)
    line_1()

}