// Line On
// Prototype of video
// scripts for the video testing - prototype
// tested with a stock video 


let frames = [];
let idx = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();
    for (let i = 1; i < 151; i ++) { // arrays to load the image - exported the videos in frames
        let filename = `assets/images/frame_${String(i).padStart(4, '0')}.jpg`;
        frames.push( loadImage(filename) );
    }
    imageMode(CENTER);
}

function draw() {
    background(0);
    image(frames[idx], width/2, height/2, width, height);
    idx = (constrain(floor(dist(mouseX, mouseY, width/2, height/2)/5), 1, 149));
}

