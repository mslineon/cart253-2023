"use strict";

class Paddle { // make a paddle class

    constructor(w,h) { // set up the paddle with a width and height
        this.width = w; // use width passed in 
        this.height = h; // same
        this.x = 0; //put the paddle on the left of the screen
        this.y = height - this.height/2; // put the paddle on the bottom, but a bit higher so we can see the whole thing
    }

    move() {
        this.x = mouseX; // move the paddle to where the mouse is
    }

    display() { // show the paddle
        push(); // set style only for paddle
        fill(255); // paddle is white
        noStroke(); // paddle has no outline
        rectMode(CENTER); // paddle is aligned in the center
        rect(this.x,this.y,this.width,this.height); // draw a rectangle that looks like paddle
        pop(); // lets get outta here!
      }
    
}