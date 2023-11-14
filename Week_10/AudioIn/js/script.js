/**
 * Audio In
 * Line On
 */

"use strict";

// The microphone
// let mic;

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//   // Create our AudioIn object
//   mic = new p5.AudioIn();
//   // Try to connect to the user's microphone
//   mic.start();
// }

// function draw() {
//   background(0);

//   // Get the current level of sound going into the microphone
//   // We're doing this in draw() so we can see it changing
//   // over time
//   let level = mic.getLevel();

//   // Display the current level on the canvas
//   push();
//   textAlign(LEFT, CENTER);
//   textSize(32);
//   fill(255);
//   text(level, 50, height / 2);
//   pop();
// }

//_____________________

// "use strict";

// // The microphone
// let mic;

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
//   // Create our AudioIn object
//   mic = new p5.AudioIn();
//   // Try to connect to the user's microphone
//   mic.start();
// }

// function draw() {
//   background(0);

//   // Get the current level of sound going into the microphone
//   let level = mic.getLevel();

//   // Visualize the level as a circle's size
//   let size = map(level, 0, 1, 0, width);
//   push();
//   fill(255, 0, 0);
//   noStroke();
//   ellipse(width / 2, height / 2, size);
//   pop();
// }

//___________________________

// "use strict";

// // The microphone
// let mic;
// // A ghost
// let ghost;
// // A clown image
// let clownImage;

// function preload() {
//   clownImage = loadImage(`assets/images/clown.png`);
// }

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();

//   // Create our AudioIn object
//   mic = new p5.AudioIn();
//   // Try to connect to the user's microphone
//   mic.start();
//   // Create our ghost
//   ghost = createGhost(clownImage);
// }

// // Create a ghost in the center of the screen with various
// // ghostly properties
// function createGhost(ghostImage) {
//   let ghost = {
//     x: width / 2,
//     y: height / 2,
//     vx: 0,
//     vy: 0,
//     happySpeed: 1, // How fast the ghost moves when happy
//     scaredSpeed: 25, // How fast the ghost moves when scared
//     image: ghostImage, // The image to display
//     alpha: 50, // How transparent is the ghost,
//     state: `happy`, // How does the ghost feel right now?,
//     scaredThreshold: 0.5 // How loud a sound makes the ghost afraid?
//   };
//   return ghost;
// }

// function draw() {
//   background(0);

//   // Get the current level of sound going into the microphone
//   let level = mic.getLevel();

//   // Check if the ghost gets scared
//   if (level > ghost.scaredThreshold) {
//     ghost.state = `afraid`;
//     // The ghost should run away to the right
//     ghost.vx = ghost.scaredSpeed;
//   }

//   // Check if the ghost is happy at the moment
//   if (ghost.state === `happy`) {
//     // If the ghost is happy, it moves around randomly
//     let r = random(0, 1);
//     if (r < 0.1) {
//       ghost.vx = random(-ghost.happySpeed, ghost.happySpeed);
//       ghost.vy = random(-ghost.happySpeed, ghost.happySpeed);
//     }
//   }

//   // Move the ghost
//   ghost.x += ghost.vx;
//   ghost.y += ghost.vy;

//   // Display the ghost
//   push();
//   tint(255, ghost.alpha);
//   image(ghost.image, ghost.x, ghost.y);
//   pop();
// }

//_____________________

// "use strict";

// let barkSFX;

// function preload() {
//   barkSFX = loadSound(`assets/sounds/bark.wav`);
// }

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();
// }

// function draw() {
//   background(0);
// }


// function mousePressed() {
//   // Make the dog bark backwards by setting its rate to -1
//   barkSFX.rate(-1);
//   barkSFX.play();
// }

//______________________


"use strict";

let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

function draw() {
  background(0);

  // We can calculate the rate we should set the sound to by mapping
  // the mouse's x position to our desired range..
  let newRate = map(mouseX, 0, width, -3, 3);
  // And then set the rate of our sound file to the new rate
  // Note how we can do this while the sound is still playing!
  barkSFX.rate(newRate);
}

function mousePressed() {
  // Since we'll be playing around with the sound, it makes sense to loop it
  // so it doesn't stop.
  barkSFX.loop();
}