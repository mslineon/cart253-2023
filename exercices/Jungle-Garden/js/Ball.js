"use strict";

class Ball { // set up class with all information storing the ball 
    constructor(x,y) { // we need x, y to pass the information in 
    this.x = x; // each ball has different x position
    this.y = y; // each ball has different y position
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    }  


  gravity(force) { // gravity applied
    this.ay = this.ay + force; // we add force to the acceleration - f = m * a (some physics over here, so fun)
  }

  move() { 
    this.vx = this.vx + this.ax; // we add acceleraion to the velocity
    this.vy = this.vy + this.ay; // same as above

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed); // constrain on the max speed
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed); // same as above

    this.x = this.x + this.vx; // then we add velocity to the position 
    this.y = this.y + this.vy; // same as above  

    if (this.y - this.size/2 > height) {
      this.active = false; // if out of screen, then we put as inactive. Thank you! 
    }
  }

  bounce(paddle) { // we pass the paddle object as an argument, so we can get it's properties
    if (this.x > paddle.x - paddle.width/2 &&
        this.x < paddle.x + paddle.width/2 &&
        this.y + this.size/2 > paddle.y - paddle.height/2 &&
        this.y - this.size/2 < paddle.y + paddle.height/2) { // check the properties of the paddle to see if this touches

      // if touche then we Bounce - chicawawa
      let dx = this.x - paddle.x; // check which side of the paddle it bounces from? (teachers code)
      this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2); // use that to set the new velocity

      this.vy = -this.vy; // reverse the y velocity
      this.ay = 0; // acceleration is set to zero
    }
  }

  display() { // display of the ball, what he would look like
    push(); // set style only for this part
    fill(255,100,150); // make it redish
    stroke(0); // black outline
    ellipse(this.x,this.y,this.size); // draw the ball with its position and size
    pop();
  }

}  

