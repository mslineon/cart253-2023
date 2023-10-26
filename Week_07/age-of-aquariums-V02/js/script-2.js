/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

// "use strict";

//  Our user, to move with the mouse
// let user = {
//   x: 0,
//   y: 0,
//   size: 100
// };
// //  Food objects
// let food1;
// let food2;
// let food3;
// let food4;
// let food5;
// let food6;

// function setup() {
//   createCanvas(600, 600);

//   food1 = createFood(50, 300);
//   food2 = createFood(150, 300);
//   food3 = createFood(250, 300);
//   food4 = createFood(350, 300);
//   food5 = createFood(450, 300);
//   food6 = createFood(550, 300);
// }


// function createFood(x, y) {
//   let food = {
//     x: x,
//     y: y,
//     size: 50,
//     eaten: false
//   };
//   return food;
// }

// function draw() {
//   background(0);

//   // Move the user (with the mouse)
//   moveUser();

//   // Check whether the user has eaten either food
//   checkFood(food1);
//   checkFood(food2);
//   checkFood(food3);
//   checkFood(food4);
//   checkFood(food5);
//   checkFood(food6);

//   // Display the user and foods
//   displayUser();
//   displayFood(food1);
//   displayFood(food2);
//   displayFood(food3);
//   displayFood(food4);
//   displayFood(food5);
//   displayFood(food6);
// }

// // Sets the user position to the mouse position
// function moveUser() {
//   user.x = mouseX;
//   user.y = mouseY;
// }

// // Checks if the user overlaps the food object and eats it if so
// function checkFood(food) {
//   if (!food.eaten) {
//     let d = dist(user.x, user.y, food.x, food.y);
//     if (d < user.size / 2 + food.size / 2) {
//       food.eaten = true;
//     }
//   }
// }

// // Draw the user as a circle
// function displayUser() {
//   push();
//   fill(255);
//   ellipse(user.x, user.y, user.size);
//   pop();
// }

// // Draw the food as a circle
// function displayFood(food) {
//   // Check if the food is still available to be eaten
//   if (!food.eaten) {
//     // Display the food as its position and with its size
//     push();
//     fill(255, 100, 100);
//     ellipse(food.x, food.y, food.size);
//     pop();
//   }
// }


/////////////////////

"use strict";

// Our fish
// let fish1;
// let fish2;
// let fish3;
// let fish4;

let user = {
    x: 0,
    y: 0,
    size: 100
  };

let school = [];
let schoolCheck = [];
let schoolSize = 20;


function setup() {
  createCanvas(600, 600);

    for (let i = 0; i < 20; i++) {
        school[i] = createFish(random(0, width), random(0, height));
    }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false
  };
  return fish;
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

  function displayUser() {
      push();
      fill(255);
      ellipse(user.x, user.y, user.size);
      pop();
    }

  // Same again for displaying
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
  function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);

  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

// function mousePressed() {
//     let fish = createFish(mouseX,mouseY); // Create a fish at the mouse position
//     school.push(fish); // Add the fish to our array
//     // Now the school array has our new fish and it will be moved and drawn
//     // with all the others in the for loop!
//   }
}