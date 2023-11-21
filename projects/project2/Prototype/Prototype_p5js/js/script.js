//Line On
// Prototype
//Just testing & Prototype of hand tracking
// references found :
//https://editor.p5js.org/Jenny-yw/sketches/sqABo7pVh 
//https://learn.ml5js.org/#/

let handpose;
let video;
let predictions = [];
let titleFont;
let state = `title`;

// video frames
let frames = [];
let frameNumber = 1;

function preload() {
  titleFont = loadFont("assets/fonts/Doppelganger-Display.otf");
}

function setup() {
  createCanvas(640, 780);
  video = createCapture(VIDEO);
  video.size(width, height);
  handpose = ml5.handpose(video); // library from ml5js
  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", results => { // From p5js library references
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();

  // arrays to load the images - exported the videos in frames
  for (let i = 1; i < 151; i ++) { 
    let filename = `assets/images/frame_${i}.jpg`;
    frames.push( loadImage(filename) ); // use string to 
}
  //imageMode(CENTER);
}

function draw() {

  if (state === `title`) {
    title();
  }
  else if (state === `drawKeypoints`) {
    drawKeypoints();
    image(video, 0, 0, width, height/2);
    image(frames[frameNumber], 0, height/2, width, height/2);
  }
  
  //idx = (constrain(floor(dist(mouseX, mouseY, width/2, height/2)/5), 1, 149));
  // We can call both functions to draw all keypoints and the skeletons
}

function title() {
  push();
  background(255);
  textFont(titleFont);
  textSize(75);
  fill(0);
  text(`Mimosa Pudica`, width/2 - 60, height/4);
  textSize(25);
  text(`The perception of the Mimosa Pudica can be miscommunicated`, width/2 - 200, height/3);
  text(`and misinterpreted as fragility but is rather a defense mechanism against the environment.`, width/2 - 150, height/2 - 95);
  pop();
}

function keyPressed() {
  if (state === `title`) {
    state = `drawKeypoints`;
  }
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  if (predictions.length === 1) { // if there is a prediction then the hands is tracked
    let pointer = predictions[0].landmarks[8]; // this is the number at my pointer finger
    let thumb = predictions[0].landmarks[4]; // this is the number at my thumbs 
    let distance = dist(pointer[0], pointer[1], thumb[0], thumb[1]); // using the distance to calculate the distance between finger & thumbs
    //console.log(distance);
    stroke(255,0,0); 
    line(pointer[0], pointer[1]/2, thumb[0], thumb[1]/2); // create a line to test the distance between fingers & thumbs

    frameNumber = floor(constrain(distance/3, 1, 149)); // 

    console.log(predictions[0].landmarks[8][2]);
  }
}s