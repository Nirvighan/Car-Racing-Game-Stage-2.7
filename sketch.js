//create all the variables
var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var distance = 0;
var allPlayers;

//create the avriables for the cars
var cars, car1, car2, car3, car4;



function setup() {
    //create the canvas
    canvas = createCanvas(displayWidth, displayHeight);

    //connect the database as firebase
    database = firebase.database();

    //create the new game
    game = new Game();
    game.getState();
    game.start();



}

function draw() {
    //change the gamestate
    if (playerCount === 4) {
        game.update(1);
    }

    //clear the screen before the gamestate changes
    if (gameState === 1) {
        clear();
        game.play();
    }

}