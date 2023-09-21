/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

//objects javascript

let bg = {
    r: 0,
    g: 0,
    b: 0
};
let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    fill: 255,
    alpha: 200
};
let circle2 = { // they are just ideas and not doing anything.
    x: 0,
    y: 250,
    size: 75,
    fill: 255,
    alpha: 200

};

/**
 * Description of preload
*/
function preload() {
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    noStroke();
    circle2.x = width; // object properties are variables
    circle1.y = height/2;
}


/**
 * Description of draw()
*/
function draw() {
    //Background
    background(bg.r,bg.g,bg.b);

    bg.r = bg.r + 1;
    bg.g = bg.g + 0.5;
    bg.b = bg.b +0.45;


    bg.r = constrain(bg.r,0,213);
    bg.g = constrain(bg.g,0,132);
    bg.b = constrain(bg.b,0,219);


    //Circle1
    circle1.x = circle1.x + 1;
    circle1.x = constrain(circle1.x,0,width/2);
    fill(circle1.fill,circle1.alpha);
    ellipse(circle1.x,circle1.y,circle1.size); // function
    circle1.size = circle1.size + 1; 
    circle1.size = constrain(circle1.size,0,width);

    //Circle2

    //this make the circle move from right to left

    circle2.x = circle2.x - 1; // This is the movement of my circle
    circle2.x = constrain(circle2.x,width/2,width);//minimum constrain start at the middle of the width

    //This is the color of the circle and the transparency
    fill(circle2.fill,circle2.alpha);

    //This draws the circle
    ellipse(circle2.x,circle2.y,circle2.size);

    //This make the circle grow big
    circle2.size = circle2.size + 0.45;
    circle2.size = constrain(circle2.size,0,width/2);
}