
//user object js
let user = {
  x: 0,
  y: 0,
  size: 50,
  trail: []
};

// Blue fish arrays
let blueSchool = [];
let schoolSize = 6;
// Red fish arrays
let redSchool = [];
let redSchoolSize = 10;
let state = `fishHistory`;



function setup() {
  createCanvas(600, 600);
  //make all the blue fish and put them in the school
  for (let i = 0; i < 10; i++) {
    blueSchool[i] = createBlueFish(random(0, width), random(0, height));
  }
  //make all the red fish and put them in the school
  for (let i = 0; i < 20; i++) {
    redSchool[i] = createRedFish(random(0, width), random(0, height));
  }
}
// Creates a new JavaScript Object describing a blue fish and returns it
function createBlueFish(x, y) {
  let blueFish = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: 0.4,
      eaten: false
  };
  return blueFish;
}

// Creates a new JavaScript Object describing red fish and returns it
function createRedFish(x, y) {
  let redFish = {
    x: x,
    y: y,
    size: 20,
    vx: 0,
    vy: 0,
    speed: 6
  };
  return redFish;
}



function draw() {
  background(0);
  moveUser();
  displayUser();
   
  // create the different frames
  if (state === `fishHistory`){
    fishHistory();
  }
  else if (state === `simulation`){
    simulation();
    if (blueSchool.length == 0) {
      state = `environmentCollapse`;
    }
  }
  else if (state === `environmentCollapse`){
    environmentCollapse();
  }
}

//create the simulation of the fish
function simulation() {
  for (let i = 0; i < user.trail.length; i++) {
    let element = user.trail[i];
    let trailFill = (i/user.trail.length)
    fill(255 * trailFill, 100 * trailFill); // Adjust the fill color and transparency
    noStroke();
    ellipse(element.x, element.y, user.size);
  }
  push();

  // displaying the blue fish
  for (let i = 0; i < blueSchool.length; i++) {
    moveBlueFish(blueSchool[i]);
    displayBlueFish(blueSchool[i]);
  }
  // displaying the red fish
  drawingContext.filter = 'blur(10px)'; // reference to this p5js example: https://editor.p5js.org/Creativeguru97/sketches/p2dL9Cvse
    for (let i = 0; i < redSchool.length; i++) {
      moveRedFish(redSchool[i]);
      displayRedFish(redSchool[i]);
  }
  pop();  
  console.log(blueSchool.length);
}

// Frist frrame explaining the fish
function fishHistory() {
  push();
  fill(255);
  let fishText = `Fish were invented by Henry Ford. Industrial manufacturing constraints have forced all fish to be circular . . .`;
  let words = fishText.split(" ");
  textAlign(CENTER);
  textSize(20);
  for (let i = 0; i < words.length; i++) {
    text(words[i], width/2, 140+ (i*20));
  }
  text(`catch all blue fish.`, width/2, height - 50);
  pop();
}

// Last frame when you catch all fish
function environmentCollapse() {
  fill(255);
  text(`you ate all the fish and caused an ecosystem collapse`, width/2, height-15);
}

//my mouse being the user
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}
//display the user with the trail
function displayUser() {
    fill(255);
    ellipse(user.x, user.y, user.size);
    let newTrailPosition = {
      x: user.x,
      y: user.y
    };
    user.trail.push(newTrailPosition);
    // max trail length to 100 positions
    if (user.trail.length > 100) {
      user.trail.shift();
    }
}
//movement of the blue fish
function moveBlueFish(blueFish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    blueFish.vx = random(-blueFish.speed, blueFish.speed);
    blueFish.vy = random(-blueFish.speed, blueFish.speed);
  }
  blueFish.x = blueFish.x + blueFish.vx;
  blueFish.y = blueFish.y + blueFish.vy;
  blueFish.x = constrain(blueFish.x, 0, width);
  blueFish.y = constrain(blueFish.y, 0, height);
}
//movement of the blue fish
function moveRedFish(redFish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    redFish.vx = random(-redFish.speed, redFish.speed);
    redFish.vy = random(-redFish.speed, redFish.speed);
    redFish.size = random(10,40);
    redFish.x = redFish.x + redFish.vx * 20;
    redFish.y = redFish.y + redFish.vy * 20;
    redFish.x = constrain(redFish.x, 0, width);
    redFish.y = constrain(redFish.y, 0, height);
  }
} 
// Displays the provided blue fish on the canvas
function displayBlueFish(blueFish) {
  push();
  fill(0, 0, 255);
  noStroke();
  ellipse(blueFish.x, blueFish.y, blueFish.size);
  pop();
}
// Displays the provided red fish on the canvas
function displayRedFish(redFish) {
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(redFish.x, redFish.y, redFish.size);
  pop();
}
// when mouse touches fish, then miam miam miam
function mousePressed() {
  for (let i = 0; i < blueSchool.length; i++) {
    let blueFish = blueSchool[i];
    let d = dist(mouseX, mouseY, blueFish.x, blueFish.y);
    if (d < blueFish.size / 2) {
      blueSchool.splice(i, 1);
      break;
    }
  }
  if (state === `fishHistory`) {
    state = `simulation`;
  } 
}
