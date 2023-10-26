let user = {
  x: 0,
  y: 0,
  size: 100
};

let blueSchool = [];
let schoolSize = 6;
let redSchool = [];
let redSchoolSize = 10;

function setup() {
createCanvas(600, 600);


  for (let i = 0; i < 10; i++) {
      blueSchool[i] = createBlueFish(random(0, width), random(0, height));
      // checkBlueFish(blueFish);
  }

  for (let i = 0; i < 20; i++) {
      redSchool[i] = createRedFish(random(0, width), random(0, height));
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createBlueFish(x, y) {
let blueFish = {
  x: x,
  y: y,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 0.4
};
return blueFish;
}

function createRedFish(x, y) {
let redFish = {
  x: x,
  y: y,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 4
};
return redFish;
}


// draw()
// Moves and displays our fish
function draw() {
background(0);
moveUser();
displayUser();

//Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkFish(blueFish) {
if (!blueFish.eaten) {
  let d = dist(user.x, user.y, blueFish.x, blueFish.y);
  if (d < user.size / 2 + blueFish.size / 2) {
    blueFish.eaten = true;
  }
}
}


function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
  }

// Same again for displaying
for (let i = 0; i < blueSchool.length; i++) {
  moveBlueFish(blueSchool[i]);
  displayBlueFish(blueSchool[i]);
}

  for (let i = 0; i < redSchool.length; i++) {
  moveRedFish(redSchool[i]);
  displayRedFish(redSchool[i]);
}


// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
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
  
function moveRedFish(redFish) {
// Choose whether to change direction
let change = random(0, 1);
if (change < 0.05) {
  redFish.vx = random(-redFish.speed, redFish.speed);
  redFish.vy = random(-redFish.speed, redFish.speed);

  redFish.x = redFish.x + redFish.vx * 20;
  redFish.y = redFish.y + redFish.vy * 20;
  redFish.x = constrain(redFish.x, 0, width);
  redFish.y = constrain(redFish.y, 0, height);
  }
  
}  
// displayFish(fish)
// Displays the provided fish on the canvas
function displayBlueFish(blueFish) {
push();
fill(0, 0, 255);
noStroke();
ellipse(blueFish.x, blueFish.y, blueFish.size);
pop();
}
  
function displayRedFish(redFish) {
push();
fill(255, 0, 0);
noStroke();
ellipse(redFish.x, redFish.y, redFish.size);
pop();
}

function mousePressed() {
for (let i = 0; i < blueSchool.length; i++) {
  let blueFish = blueSchool[i];
  let d = dist(mouseX, mouseY, blueFish.x, blueFish.y);
  if (d < blueFish.size / 2) {
    blueSchool.splice(i, 1);
    break;
    }
  }
}
}