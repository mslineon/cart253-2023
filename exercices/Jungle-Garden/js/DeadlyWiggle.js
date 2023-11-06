"use strict";

class DeadlyWiggle { // set up class with all information storing the wiggler 
    constructor(x) { // we only need x to be passed the information in
        this.x = x;
        this.y = 0; // wiggler starts at the top of screen
        this.vx = random(-2,2); // it has a random velocity
        this.vy = random(2)+0.5; // it has a random downward velocity
        this.size = random(30,50); // it has a random size
        this.rotate = 0; // it will rotate so we start that off at 0
    }
    // this goes either left or right and always down
    move() {
        this.x += this.vx; // add velocity to position just like ball
        this.y += this.vy; // same as above
        this.rotate += 0.1; // rotate a bit also
    }
    // create the random wiggler 
    changeDirection() { // roll a dice to see if we will change direction
        let dice = random(6); // roll our six sided dice
        if (dice < 1) { // if the dice lands on one then pick a new random direction
            this.vx = random(-4,4);
        }
    }

    checkCollision(paddle) { // same as ball, need paddle so i can see if we hit it
        if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) { // check if i hit the paddle
            return "lose"; // if i hit the paddle you looooooose haha sorry
        }
        else {
            return "stillgood"; // if i didnt hit it, its ok
        }
    }

    passedYouBy(height) { // use the height from the sketch to see if the wiggler is too low
        if (this.y > height) { // check if wiggler is off the screen
            return true;
        }
        else return false;
    }

    touched(mx, my) { // use mouse position to check if wiggler has been touched
        
        if (abs(this.x - mx) < this.size/2 && abs(this.y - my) < this.size/2 ) { // if touch (mouse click) is inside wiggler then it has been touched
            return true;
        }
        else return false; // hey we dont need curly braces! very cool
    }

    display() { // show wiggler on screen
        push();
        fill(255,255,50); // make the wiggle yellow
        stroke(0);
        this.star(this.x, this.y); // draw the star, i copy pasted the code from the p5js vertex help file in the star function
        pop();

        this.move(); // i put these here because its easier than putting them separately outside the class since we need to run them all together anyway
        this.changeDirection(); // see above
    }

    star (x, y) {
        push();
        
        translate(x, y); // move the star to where it is supposed to be drawn
        rotate(this.rotate); // make the star turn for extra cooool points
        beginShape();  // basically the same as the p5js vertex reference to make a star
        vertex(0, this.size/2);
        vertex(this.size/10, this.size/10);
        vertex(this.size/2, 0);
        vertex(this.size/10, -this.size/10);
        vertex(0, -this.size/2);
        vertex(-this.size/10, -this.size/10);
        vertex(-this.size/2, 0);
        vertex(-this.size/10, this.size/10);
        endShape();
        pop();
    }
} 

