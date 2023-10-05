
 //Return Value - Week 05
 // Line On

 let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0
  }
  
  function setup() {
    createCanvas(500, 500)
    reset();
  }
  
  function draw() {
    background(0);
  
    move();
  
    let offScreen = circleIsOffScreen(); // variables
    if (offScreen) {
      reset();
    }
  
    ellipse(circle.x, circle.y, circle.size);
  }

  function checkIfOffScreen(){
    if (circleIsOffScreen()){
        reset();
  }
  
  function circleIsOffScreen() {
    
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  }
    else {
    return false;
  }
}
  
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }
  
  function reset() {
    circle.x = 250;
    circle.y = 250;
    circle.vx = random(-10, 10);
    circle.vy = random(-10, 10);
  }


// function setup() {
//     createCanvas(500,500)
//     let hotCelsius = toCelsius(100);
//     console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`);
  
//     let coldCelsius = toCelsius(10);
//     console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius`);
//   }
  
//   function toCelsius(fahrenheit) { // function signature
//     let result = (fahrenheit - 32) * 5/9;
//     // Return the value in the celsius variable
//     return result; // this 
//   }
  
// function draw() {
//     background(0);
//     ellipse(random(0,width),random(0,height),100,100); // This draw the jumpy circle
