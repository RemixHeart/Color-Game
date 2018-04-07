/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("connected");
var colors = genRandColArr(6);
var pickedColor = randPickedColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++ ){
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //take the picked color
    var clickedColor = this.style.backgroundColor;
    //compare the picked Color to the clicked color
    if(clickedColor == pickedColor){
      message.textContent = "Correct!";
      changeColors(pickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else {
      //fade the square
      this.style.backgroundColor = "#232323";
      message.textContent = "Try again!";
    }
  });
}

function changeColors(color){
  //loop through all squares and change their colors
  //to match the right one
  squares.forEach(function(element){
    element.style.backgroundColor = color;
  });
}

function randPickedColor(){
  //take a random number between 0 and the length of the
  //color array
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

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
