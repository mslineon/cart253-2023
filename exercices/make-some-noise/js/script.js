//Line On
// Make some noise
// references on :
//https://editor.p5js.org/Jenny-yw/sketches/sqABo7pVh 
//https://learn.ml5js.org/#/

let handpose;
let video;
let predictions = [];
let firstPlay = true;

let chimesSFX;

function preload() {
    chimesSFX = loadSound(`assets/sounds/ambience-wind-chimes-b.wav`);
  }

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas size
  video = createCapture(VIDEO); // display video
  video.size(640, 480); // video screensize


  handpose = ml5.handpose(video); // library from ml5js

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", results => { // From p5js library references
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
  imageMode(CENTER); // position of the video screen
  ellipseMode(CENTER); // control of the circle
}

function draw() {
  background(255); // bg colors
  image(video, width/2, height/2); // display video
  drawKeypoints(); // display & read the pointer & thumber
  fill(0); //color of text
  text(`touch your thumb and pointer to control the volume and circle`,width/2,height/2 + 280);// text explanation
}

function drawKeypoints() {
  if (predictions.length === 1) { // if there is a prediction then the hands is tracked
    let pointer = predictions[0].landmarks[8]; // this is the number at my pointer finger
    let thumb = predictions[0].landmarks[4]; // this is the number at my thumbs 
    let distance = dist(pointer[0], pointer[1], thumb[0], thumb[1]); // using the distance to calculate the distance between finger & thumbs
    console.log(distance);
    //stroke(255,0,0); 
    //line(pointer[0], pointer[1], thumb[0], thumb[1]); // create a line to test the distance between fingers & thumbs
    noStroke(); // no stroke to circle
    fill(255, 240, 219); // color circle
    ellipse(width/2, height/2, distance); // ellipse position
    // console.log(predictions[0].landmarks[8][2]); // to see the distance fingers in the log
    chimesSFX.setVolume(constrain(distance/350, 0, 1), 0.01);
    if (firstPlay == true) {
        chimesSFX.loop(); // play sound when hands is show
    }
    firstPlay = false; // run the codes for playing music once
  }
  else {
    chimesSFX.setVolume(0, 0.01); // volume 
  }
}