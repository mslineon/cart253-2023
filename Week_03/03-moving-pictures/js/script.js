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
    size: 50,
    fill: 255,
    alpha: 200
};

let circle2 = { // they are just ideas and not doing anything.
    x: 0,
    y: 250,
    size: 50,
    fill: 255,
    alpha: 200
};

let circle3 = {
    x: 0,
    y: 0,
    size: 50,
    fill: 50,
    alpha: 100
}



/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
    circle2.x = width; // object properties are variables
    circle1.y = height/2;
}


/**
 * Description of draw()
*/
function draw() {
    //Background
    //background(255);
    background(bg.r,bg.g,bg.b);

    bg.r = bg.r + 1;
    bg.g = bg.g + 0.5;
    bg.b = bg.b + 0.45;

    // this is the maximum at what value I want the bg color to change
    bg.r = constrain(bg.r,0,220);
    bg.g = constrain(bg.g,0,220);
    bg.b = constrain(bg.b,0,220);

    //Circle1

    //This is the movement of the circle
    circle1.x = circle1.x + 1;
    circle1.y = circle1.y - 0.45;

    //Constrain
    circle1.x = constrain(circle1.x,0,width);


    //coloring

    circle1.fill = random(0,255) - circle3.fill;
    fill(circle1.fill,circle1.alpha);
    ellipse(circle1.x,circle1.y,circle1.size/2); // function

    circle1.size = circle1.size + 1;
    circle1.size = constrain(circle1.size,0,width);


    //Circle2

    //this make the circle move from right to left

    circle2.x = circle2.x - 1; // This is the movement of my circle
    circle2.x = constrain(circle2.x,width/2,width);//minimum constrain start at the middle of the width

    //This is the color of the circle and the transparency
    fill(circle2.fill,circle2.alpha);

    //This draws the circle #2
    ellipse(circle2.x,circle2.y,circle2.size);

    //This make the circle grow big
    circle2.size = circle2.size + 0.10;
    circle2.size = constrain(circle2.size,0,width/2);


    //This is circle 3
    circle3.fill = random(0,255) - circle3.fill/3;
    fill(circle3.fill);
    ellipse(mouseX, mouseY, circle3.size);


    // ellipse(mouseX+10, mouseY+10,circle3.size);
    fill(255, 0, 0, 255);
    stroke(0, 0, 5);
    strokeWeight(2);
    line(circle2.x - 1, width/2 , circle1.x +1, circle1.y - 0.45);
}
