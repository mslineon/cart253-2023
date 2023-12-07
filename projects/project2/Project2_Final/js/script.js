//Line On
// Project 2 - Mimosa Pudica
// references found :
//https://editor.p5js.org/Jenny-yw/sketches/sqABo7pVh 
//https://learn.ml5js.org/#/

let handpose; // object to define hand recognition
let video; // object for the video
let predictions = []; // object to predict the fingers
let titleFont; // font title
let myFont; // font description
let state = `title`; // state starting at title
let modelReady = false; // object to not start ml5js
let firstPlay = true; // state of song when we start
let mimosaSong, delay; // object for song

// video frames 
let frames = []; // array containing the frames
let frameNumber = 1; // current frame to display
let frameAmount = 0; // countaining the number of frames

function preload() {
  titleFont = loadFont("assets/fonts/Doppelganger-Display.otf"); // loading title font
  myFont = loadFont("assets/fonts/WorkSans-Light.ttf"); // loading text font
  mimosaSong = loadSound(`assets/sounds/mimosa_01.mp3`); // loading song
}

function setup() {
    createCanvas(640, 780); // canvas size aka video size
    video = createCapture(VIDEO); // webcam
    video.size(width, height); // size of the video
    handpose = ml5.handpose(video, modelLoaded); // library from ml5js - This sets up an event that fills the global variable "predictions" - with an array every time new hand poses are detected
    handpose.on("predict", results => { // From p5js library references (see link above)
    predictions = results;
  });

  video.hide(); // Hide the video element, and just show the canvas
  
  for (let i = 0; i < 363; i +=5) {   // arrays to load the images - exported the videos in frames
    let filename = `assets/mimosa/frame_${i}.jpg`; 
    frames.push(loadImage(filename)); // use string to load the images from video in
  }
  frameAmount = frames.length - 1; // amount of frame we are loading -1 being making the flower close
  console.log("framesAmount", frameAmount); // check how many frames i loaded  
  delay = new p5.Delay(); // reference from p5js sound Delay
  delay.process(mimosaSong, 0.1, 0.8, 2300); // how the music will fades away - trials and error
  delay.setType(`pingPong`); // type of sound delay from P5js references
}

function modelLoaded() {
  modelReady = true; // this load the ml5js 
  //console.log("model Loaded");
}

function draw() {
  if (state === `title`) { // state for the first page title 
    title();
  }
  else if (state === `drawKeypoints`) { // state for displaying the video images & starting the function of the drawkeypoint aka tracking fingers
    drawKeypoints(); // show the whole thumb/finger distance & mapping
    image(frames[frameNumber], 0, 0);// show frames of plants
  }
}

function title() { // Introduction frame
  push();
  background(255); // bg color to white
  textFont(titleFont); // title font 
  textSize(75); // size of the title
  fill(0); // color of the font is set to black
  text(`Mimosa Pudica`, width/2 - 60, height/4); // title text
  textSize(16); // font size of the description text
  textFont(myFont); // font use for the description text
  text(`HOW WE PERCEIVE THE MIMOSA PUDICA CAN BE MISCOMMUNICATED.`, width/2 - 220, height/2 - 150);
  text(`AND MISINTERPRETED AS FRAGILITY BUT IT IS IN A SENSE A DEFENSE`, width/2 - 220, height/2 - 120);
  text(`MECHANISM AGAINST THE ENVIRONMENT THEY LIVE IN.`, width/2 - 110, height/2 - 90);
  text(`BE GENTLE WHEN TOUCHING IT.`, width/2 - 219, height/2 + 80);
  textSize(14); // font size of the description text
  text(`TOUCH YOUR THUMB AND INDEX TO INTERACT WITH THE PLANT.`, width/2 - 220, height/2 - 10);
  if (modelReady === false) { // this text appear when the model is not yet loaded
    text(`THE PLANT IS RECHARGING, PLEASE STAND BY UNTIL IT'S BACK TO ITSELF...`, 0, height - 200);
  }
  else if (modelReady === true) { // when the model is loaded then this text appear to invite the viewer to enter the scene
    text(`PRESS YOUR MOUSE TO ENTER`, 0, height - 150);
    text(`THE PLANT IS READY FOR YOU TO PLAY WITH THEM.`, 0, height - 200);
  }
  pop();
}

function mousePressed() { // when the user mouse pressed and when the model is ready, then we can initiate the piece
  if (state === `title` && modelReady === true) {
    state = `drawKeypoints`;
  }
}

function drawKeypoints() { // A function to detect keypoints
  if (predictions.length === 1) { // if there is a prediction then the hands is tracked
    let pointer = predictions[0].landmarks[8]; // this is the number at my pointer finger (landmark define by ml5js)
    let thumb = predictions[0].landmarks[4]; // this is the number at my thumbs (landmark define by ml5js)
    let distance = dist(pointer[0], pointer[1], thumb[0], thumb[1]); // using the distance to calculate the distance between finger & thumbs
    console.log("distance", distance); // calculate the distance so that we can constrain in order to play the video related to the hands
    distance = constrain(distance, 50, 200); // keep distance values inside 0-250 (define by the console above)
    distance = map(distance, 50, 200, frameAmount, 0); // map distance values to 0-amount of frames
    distance = floor(distance); // round down the number of the distance to what the value is
    frameNumber = distance; // assign distance to frame number
    mimosaSong.setVolume(1-(distance/frameAmount), 0.01); // to play the music when the fingers are not touching
    delay.drywet(distance/frameAmount); // reference p5js for a type of delay
    if (firstPlay === true) { // play the song
      mimosaSong.loop(); // loop the song
    }
    firstPlay = false; // this run so that the song plays once
  }
  else {
    mimosaSong.setVolume(0, 0.01); // Volume
  }
}