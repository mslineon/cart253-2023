/**
Introducing Object-Oriented Programming
Line On**/


"use strict";

// Our garden object
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 20,
    // The color of the grass (background)
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }
  };


function preload() {

}

function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    for (let i = 0; i < garden.flowers.length; i++) {
      let flower = garden.flowers[i];
      flower.display(); // NEW! Call the display() method for this flower
    }
}
  

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
  }
  }
  
  // createFlower()
  // Creates a new JavaScript Object describing a flower and returns it
  function createFlower() {
    // Create our object
    let flower = {
      // Position and size information
      x: random(0, width),
      y: random(0, height),
      size: 50,
      stemLength: 75,
      stemThickness: 10,
      petalThickness: 10,
      // Color information
      stemColor: {
        r: 50,
        g: 150,
        b: 50
      },
      petalColor: {
        r: 200,
        g: 50,
        b: 50
      },
      centreColor: {
        r: 50,
        g: 0,
        b: 0
      }
    };
    return flower;
  }

  function displayFlower(flower) {
    push();
    // Draw a line for the stem
    strokeWeight(flower.stemThickness);
    stroke(flower.stemColor.r, flower.stemColor.g, flower.stemColor.b);
    line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
    // Draw a circle with a heavy outline for the flower
    strokeWeight(flower.petalThickness);
    fill(flower.centreColor.r, flower.centreColor.g, flower.centreColor.b);
    stroke(flower.petalColor.r, flower.petalColor.g, flower.petalColor.b);
    ellipse(flower.x, flower.y, flower.size);
    pop();
  }