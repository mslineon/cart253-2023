/**
 * Boleans Tutorial
 * Line On
 */

"use strict";

let displayCircle = false;

let circle1 = {
    x: 0,
    y: 0,
    size: 100,
    fill: {
        r:125,
        g:50,
        b:76
    }

}

//This is my canvas
function setup() {

    createCanvas (windowWidth,windowHeight);
    circle1.x = width/3;
    circle1.y = height/3;
}

function draw() {

        if (mouseIsPressed) {
          background(255);
          displayCircle = true;
        }
        else {
          background(0);
        }

         if (displayCircle) {
          ellipse(width/2,height/2,100,100);
        }

        if (keyIsPressed) {
          background (255);
          fill(circle1.fill.r,circle1.fill.g,circle1.fill.b);
          ellipse (circle1.x,circle1.y,circle1.size);
        }

        else {
            fill(175);
            ellipse (circle1.x,circle1.y,circle1.size);
        }

}