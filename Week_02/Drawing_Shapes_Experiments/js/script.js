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

    createCanvas(500, 500);


    background(50,250,210);
    rectMode(CENTER);
    noStroke();//Camel Case (when Capitalize letters)
    fill(250,45,100,50);
    rect(width/2,height/2,100,100);
    stroke(250,235,208);
    strokeWeight(2);
    fill(184,235,208,100);
    ellipse(width/2-150,height/2,100,100);

    //line_1();



}


/**
 * Description of draw()
*/
function draw() {

}

function line_1() {
    line(0,0,width,height);
    line(0,height,width,0);
    ellipse(width/2,height/2,100,100);
}