/**
 * Week 04 - Conditional
 * Line On
 * 
 */

"use strict";

let bg = {
    r: 0,
    g: 0,
    b: 0,
    speed: 0.5
}

let circle = {
    x: 0,
    y: 255,
    size: 50,
    speed: 1,
    fill: 255
}




function setup() {
    // This is the canva size
    createCanvas(500, 500);

}



function draw() {

    // This is the color of my background
    background(bg.r,bg.g,bg.b);

    bg.r = bg.r + bg.speed;
    bg.g = bg.g + bg.speed;
    bg.b = bg.b + bg.speed;

    bg.r = constrain(bg.r,0,255);
    bg.g = constrain(bg.g,0,204);
    bg.b = constrain(bg.b,0,13);

      // NEW: If the background shade is exactly 255 (white, the maximum color number)
    if (bg.r === 255) {
        // Set it back to 0 (black)
        bg.r = 0;
        bg.g = 0;
        bg.b = 0;
    }

    if (circle.x > width){
        circle.speed = -circle.speed;
    }

    if (circle.x < 0){
        circle.speed = -circle.speed;
    }
    


    fill(circle.fill);

    if(mouseX < width/4) {
        circle.fill = 150;
      }

    else if (mouseX < width/2){
        circle.fill = 0;
    }

    // strict conditions 
    else if (mouseX < 3 * width/4) {
        circle.fill = 150;
        if (circle.x > width/2){
            circle.size = 100;
        }
      }

    else {
        circle.fill = 255;
        if (circle.x < width/2){
            circle.size = 50;
        }
      }

    // if (mouseX < width/2){
    //     circle.fill = 255;
    // }


    circle.x = circle.x + circle.speed;
    ellipse(circle.x,circle.y,circle.size);


}