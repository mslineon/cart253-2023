
"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 50,
  bees: [],
  // How many bees in the garden
  numBees: 2,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  for (let i = 0; i < garden.numBees; i++){
    let x = random(0, width);
    let y = random(0, height);
    // create new bee adding arguments
    let bee = new Bee (x,y);
    // Add the bee to the array of bees
    garden.bees.push(bee);
    }
  }
}


// draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    if (flower.alive){
      flower.shrink(); // NEW! Shrink living flowers every frame
      flower.display();
    }
  }

  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    // Check if this bee is alive
    if (bee.alive) {
      // Update the bee by shrinking, moving and displaying it
      bee.shrink();
      bee.move();
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }
      bee.display();
    }
  }
}