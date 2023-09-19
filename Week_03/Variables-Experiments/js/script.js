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


/**
 * Description of setup
*/
function setup() {
    // createCanvas(600,600);
    createCanvas(windowWidth,windowHeight);

}


/**
 * Description of draw()
*/
function draw() {
    //this provide the color
    background(250,0,0);
    //alignements
    rectMode(CENTER);
    rect(width/2,height/2,100,100); // with this, the rectangle will be drawn in the center
}