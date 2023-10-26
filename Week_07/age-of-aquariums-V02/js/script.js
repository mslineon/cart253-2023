

// "use strict";

// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [],
//   maxTrail: 10 // NEW! Maximum number of positions in the trail array
// }

// // setup() the canvas ready
// function setup() {
//   createCanvas(600, 600);
// }

// // draw() draws a circle with a trails
// function draw() {
//   background(0);

//   // Use a for loop to go through each element in the circle's trail array in order
//   for (let i = 0; i < circle.trail.length; i++) {
//     // Get the element at the index indicated by i (0, then 1, then 2, etc.)
//     let element = circle.trail[i];
//     // Draw an ellipse the same size as the circle at that position
//     ellipse(element.x, element.y, circle.size);
//   }

//   // Move the circle to the mouse position
//   circle.x = mouseX;
//   circle.y = mouseY;

//   // Draw the circle
//   ellipse(circle.x, circle.y, circle.size);

//   // Create a new position object that stores where the circle is now
//   // which we can add to the trail to trace the path of the circle
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y
//   };
//   // Add the position to the circle's trail array
//   circle.trail.push(newTrailPosition);

//   // NEW! Check if the trail's length has exceeded the maximum
//   if (circle.trail.length > circle.maxTrail) {
//     // If it has, remove the oldest element (the one at the START of the array)
//     circle.trail.shift();
//   }
// }

/////////////////////////

// "use strict";

// // Our array of fortunes, each of which is a string
// // Note that we still use square brackets around the array,
// // but now we list the elements the array should start with
// // separated by commas.
// // As here, we can put each element on a separate line for clarity.
// let fortunes = [
//   `It's not looking great.`,
//   `You will trip over an apple today.`,
//   `Beware of over-friendly cats.`,
//   `Bank error in your favor, collect $200.`,
//   `Start your Korean skincare regime.`,
//   `You will feel better than 20 years ago.`,
//   `David Lynch will call you on your birthday.`,
//   `Happiness is just around the corner.`,
//   `You will make it look easy today.`,
//   `Your future is cloudy.`
// ];

// // We need a variable to store the chosen fortune so we can
// // display it in draw()
// let chosenFortune = `I am looking into your soul...`;

// // setup() gets basic styling ready
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   fill(255);
// }

// // draw() displays the current fortune
// function draw() {
//   background(0);
//   text(chosenFortune, width / 2, height / 2);
// }

// // mousePressed() chooses a random fortune from the fortunes array
// function mousePressed() {
//   // By passing the fortunes array as an argument to random() we get back
//   // a RANDOM ELEMENT in the array (one of the fortune strings) which we
//   // can then store in the chosenFortune variable for displaying
//   chosenFortune = random(fortunes);
// }

///////////////////////

"use strict";

// An array to store our images
let images = [];
// A variable storing the number of images to load
let numImages = 5;
// A variable to store the image we want to display
let displayImage;

// preload() loads 10 images
function preload() {
  // Use a for loop to count from 0 up to 9
  for (let i = 0; i < numImages; i++) {
    // Load the image into a variable
    // Note that we use i to specify the number in the filename!
    // Note how nice this is with a template literal string
    let loadedImage = loadImage(`assets/images/clown-${i}.png`);
    // Add the loaded image to the images array
    images.push(loadedImage);
  }
}

// setup() selects the image to display randomly
function setup() {
  createCanvas(600, 600);
  // Choose an image to display randomly from the array
  displayImage = random(images);
}

// draw() displays the randomly chosen image
function draw() {
  background(0);
  // Display the randomly selected image
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
}


