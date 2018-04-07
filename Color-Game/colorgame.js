/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /**
 *    Created on : 7-apr-2018
 *    Author     : RemixHeart
 */
 
//variables
var numSquares = 6;
var pickedColor;
var colors = [];
//selectors
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
//buttons selectors
var resetBtt = document.querySelector("#reset");
var modeBtt = document.querySelectorAll(".mode");

init();


//initialization of the game
function init(){
  //set up the mode
  setUpMode();
  //reset(or set) the various functions
  reset();
  //set up of the squares and of the game logic
  setUp();
}


//mode buttons event listeners
function setUpMode(){
  modeBtt.forEach(function(element, i, arr){
    element.addEventListener("click", function(){
      //removes the "selected" class on both buttons just to be sure
      modeBtt[0].classList.remove("selected");
      modeBtt[1].classList.remove("selected");
      //then adds it(the class)
      this.classList.add("selected");
      //changes the number of squares based on the mode
      this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  });
  //add an event listener to the reset buttton too
  resetBtt.addEventListener("click", function(){
    reset();
  });
}


//set up of the squares and game logic
function setUp(){
  squares.forEach(function(element){
    //add click listeners to squares and put game logic
    element.addEventListener("click", function(){
      //take the picked color
      var clickedColor = this.style.backgroundColor;
      //compare the picked Color to the clicked color
      if(clickedColor == pickedColor){
        //change the message and reset button text contents
        resetBtt.textContent = "Play Again?"
        message.textContent = "Correct!";
        //turns all the squares color to the right one
        changeColors(pickedColor);
        //change the h1 background to the right color
        h1.style.backgroundColor = pickedColor;
      }
      else {
        //fade the square
        this.style.backgroundColor = "#232323";
        //change message text content
        message.textContent = "Try again!";
      }
    });
  });
}


//just reset all things up
function reset(){
  //reset the text content of the button
  resetBtt.textContent = "New Colors";
  //reset the text content of the message
  message.textContent ="";
  //generate all new colors
  colors = genRandColArr(numSquares);
  //pick new random color
  pickedColor = randPickedColor();
  //change colorDisplay to match new picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  squares.forEach(function(element, i, arr){
    //control if there's a color at that index
    if(colors[i]){
      element.style.display = "block"; //show the square
      element.style.backgroundColor = colors[i];
    }
    else {
      element.style.display = "none"; //hide square
    }
  });
  //reset the background of the h1
  h1.style.backgroundColor = "steelblue";
}


//change all squares to be of the same exact winning color
function changeColors(color){
  //loop through all squares and change their colors
  //to match the right one
  squares.forEach(function(element){
    element.style.backgroundColor = color;
  });
}


//picks a random color in the color array
function randPickedColor(){
  //take a random number between 0 and the length of the
  //color array
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}


//create an color array with random colors in it
function genRandColArr(num){
  //make an array
  var arr = [];
  //add num random colors to the array
  for(var i = 0; i < num; i++){
    //get Random color and push it into arr
    arr.push(randColor());
  }
  //return the array
  return arr;
}


//pick a random rgb color
function randColor(){
  //pick red from 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick green from 0 to 255
  var blue = Math.floor(Math.random() * 256);
  //pick blue from 0 to 255
  var green = Math.floor(Math.random() * 256);
  //return an rgb string of the whole color
  return "rgb("+ red + ", " + green + ", " + blue + ")";
}
