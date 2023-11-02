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

    for (let i = 0; i < garden.numFlowers; i++) {
      // NEW! Create a new flower
      let flower = new Flower();
      flower.display();
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
    }
    garden.flowers.sort(sortByY);

    function sortByY(flower1, flower2) {
      // We achieve the above by subtracting flower2's y position
      // from flower1's! How elegant!
      return flower1.y - flower2.y;
  }
}
  
  // sortByY() takes two flowers as parameters to compare
  // It should return a negative number if flower1 should come
  // BEFORE flower2 in the array, a positive number if flower1 should
  // come AFTER flower2 in the array, and 0 if there they have the
  // same priority
  
  
    // Loop through all the flowers in the array and display them
    // for (let i = 0; i < garden.flowers.length; i++) {
    //   // garden.flowers.push(flower);  
    //   let flower = garden.flowers[i];
    //   displayFlower(flower);
    // }

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(600, 600);
  
    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
      // Create a new flower
      let flower = createFlower();
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