/**
 * Polysynth
 * Line On
 */

// "use strict";

// let synth;

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();

//   synth = new p5.PolySynth();
// }

// function draw() {
//   background(0);
// }

// function mousePressed() {
//   synth.play(`C4`, 1, 0, 1);
// }

//_________________________

// "use strict";

// let synth; // Our synthesizer
// let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`]; // The scale for F minor

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();

//   // Create the synthesizer
//   synth = new p5.PolySynth();
// }

// function draw() {
//   background(0);
// }

// // keyPressed() plays a note
// function keyPressed() {
//   playRandomNote()
// }

// // playRandomNote() plays a random note
// function playRandomNote() {
//   // Chose a random note
//   let note = random(notes);
//   // Play it
//   synth.play(note, 1, 0, 1);
// }

//___________________________

// "use strict";

// // Our synthesizer
// let synth;
// // The scale for F minor ("b" means "flat" if you haven't seen it before)
// let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
// // To track the interval that plays note
// let interval;

// function setup() {
//   createCanvas(600, 600);
//   userStartAudio();

//   // Create the synthesizer
//   synth = new p5.PolySynth();
// }

// function draw() {
//   background(0);
// }

// // mousePressed() starts and stops our piano playing
// function mousePressed() {
//   // First check that the piano isn't already playing
//   // The interval will be undefined if it hasn't started
//   if (interval === undefined) {
//     // Start our interval, calling playRandomNote every 500 milliseconds
//     // Assign the result to interval to remember the interval
//     interval = setInterval(playRandomNote, 500);
//   }
//   else {
//     // If they click when it's playing, clear the interval and set interval
//     // back to undefined to stop play
//     clearInterval(interval);
//     interval = undefined;
//   }
// }

// // playRandomNote() plays a random note
// function playRandomNote() {
//   // Chose a random note
//   let note = random(notes);
//   // Play it
//   synth.play(note, 1, 0, 1);
// }

//_______________________

"use strict";

// Our synthesizer
let synth;
// The scale for F minor ("b" means "flat" if you haven't seen it before)
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
// The current note to play, start at the beginning
let currentNote = 0;
// To track the interval that plays note
let interval;

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Create the synthesizer
  synth = new p5.PolySynth();
}

function draw() {
  background(0);
}

// mousePressed() starts and stops our piano playing
function mousePressed() {
  // First check that the piano isn't already playing
  // The interval will be undefined if it hasn't started
  if (interval === undefined) {
    // Start our interval, calling playNextNote every 500 milliseconds
    // Assign the result to interval to remember the interval
    interval = setInterval(playNextNote, 500);
  }
  else {
    // If they click when it's playing, clear the interval and set interval
    // back to undefined to stop play
    clearInterval(interval);
    interval = undefined;
  }
}

// playNextNote() plays the next note in our array
function playNextNote() {
  // Chose the note at the current position
  let note = notes[currentNote];
  // Play it
  synth.play(note, 0.2, 0, 0.4);
  // Increase the current position and go back to 0 when we reach the end
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}
