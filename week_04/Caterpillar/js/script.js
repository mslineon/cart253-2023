/**
 * Caterpillar
 * Line On
 */

"use strict";

let caterpillar = {
    x: undefined,
    y: undefined,
    size: 0,
    totalSegments: 100, // NEW: Need to know how many segments it has!
    segmentSize: 50,
    segmentSpacing: 40, // NEW: better to have this as a property of the caterpillar  
}

let dangerZone = {
    x: 250,
    y: 250,
    size: 150
}

let sphere = {
    x: 250,
    y: 250,
    size: 300,
    vx: 1, // x velocity
    vy: 0,
    speed: 10
}

/**
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth,windowHeight);
    // caterpillar.x = width/2;
    // caterpillar.y = height/2;

    // caterpillar.x = random(0, width);
    // caterpillar.y = random(0, height);

//     let d = dist(caterpillar.x,caterpillar.y,dangerZone.x,dangerZone.y);
//         // Check if our white circle overlaps the danger zone...
//      if (d < caterpillar.size/2 + dangerZone.size/2) {
//         // If it does, try a different random position!
//         caterpillar.x = random(0, width);
//         caterpillar.y = random(0, height);
//   }

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

  


    noStroke();
    // fill(100, 200, 100); 
    // ellipse(dangerZone.x, dangerZone.y, dangerZone.size);


    // fill(255);
    // noStroke();
    // ellipse(caterpillar.x, caterpillar.y, caterpillar.size);

    // fill(255);
    // noStroke();
    // ellipse(sphere.x,sphere.y,sphere.size);

    for (let size = sphere.size; size > 0; size--) {
        // Calculate our fill by mapping the current circle's size based on the overall size
        let currentFill = map(size, 55, sphere.size, 255, 0);
        // Apply the fill
        fill(currentFill);
        // Draw the ellipse
        ellipse(sphere.x, sphere.y, size);
      }

    if (mouseX > sphere.x) {
        sphere.vx = 1;
      }

    else if (mouseX < sphere.x) {
        sphere.vx = -1;
      }

      if (mouseY > sphere.y) {
        // So set the circle's x velocity to a POSITIVE number to move it DOWN
        sphere.vy = 1;
      }
      // Or if the mouse y position is LESS than the circle y position, it must be ABOVE the circle
      else if (mouseY < sphere.y) {
        // So set the circle's x velocity to a NEGATIVE number to move it UP
        sphere.vy = -1;
      }

      // If the mouse x position is GREATER than the circle x position, it must be to the RIGHT of the circle
    if (mouseX > sphere.x) {

        circle.vx = sphere.speed;
     }
     else if (mouseX < sphere.x) {
        sphere.vx = -sphere.speed;
     }

    if (mouseY > sphere.y) {
        sphere.vy = sphere.speed;
     }
    else if (mouseY < sphere.y) {
        sphere.vy = -sphere.speed;
     }

      

    sphere.x = sphere.x + sphere.vx;
    sphere.y = sphere.y + sphere.vy;
    
    

    // let segmentsDrawn = 0;  
    // let segmentX = mouseX;

    // while (segmentsDrawn < caterpillar.totalSegments){ // This is the looping of my caterpillar

    //     ellipse(segmentX, caterpillar.y, caterpillar.segmentSize);
    //     segmentX = segmentX + caterpillar.segmentSize;
    //     // segmentsDrawn = segmentsDrawn + 1;
    //     segmentsDrawn++;
    // }

    // for (let segmentsDrawn =0; segmentsDrawn < caterpillar.totalSegments; segmentsDrawn++) {
    //     ellipse(segmentX,caterpillar.y,caterpillar.segmentSize);
    //     segmentX = segmentX + caterpillar.segmentSpacing;
    // }
    
    // for (let i = 0; i < caterpillar.totalSegments; i++) {
    //     ellipse(mouseX + i * caterpillar.segmentSpacing, caterpillar.y, caterpillar.segmentSize);
    //   }
}

function mousePressed() {
    // When the mouse button is pressed, move the circle to the mouse position
    sphere.x = mouseX;
    sphere.y = mouseY;
  }