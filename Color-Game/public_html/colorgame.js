/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("connected");
var colors =[
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,255)",
    "rgb(0,0,255)",
    "rgb(255,0,255)",];

var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++ ){
    squares[i].style.background = colors[i];
}
