/**
 * Project 1 - Simulation
 * Line On
 */

"use strict";

let state = `explanation`; // variable to store the state open screen 




function preload() {

}



function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER,CENTER); // put text middle
}

function draw() {

    if (state === `title`) {
        title();
    }
    else if (state === `explanation`) {
        explanation();
    }
    else if(state === `simulation`) {
        simulation();
    }
    else if(state === `failure`) {
        failure();
    }


}

function title(){
    push(); 
    textSize(100); // make title big
    fill(120,153,212); // make title bluey
    text(`WELCOME TO ABIGAME`,width/2,height/2); // display text
    textSize(50);
    text(`press any key to learn the controls`,width/2,height/2+70);
    pop();
}

function explanation(){
    push();
    textSize(45);
    fill(120, 153, 212);
    text(`space to drop the bones`, width/2, height/2 - 45);
    text(`click mouse to shoot the ball`, width/2, height/2);
    text(`press any key to start`, width/2, height/2 + 45);
    pop();

}

function simulation() {

}

function failure() {

}

function ballControl() {

}

function boneControl() {

}

function timerDisplay() {

}

function scoreDisplay() {

}

function abiDog() {

}