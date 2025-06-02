var button = document.querySelector('button'); //querySelector=method
var box = document.getElementById('changeMe');
var colors = ['purple','red', 'blue', 'green', 'black', 'yellow', 'orange'];

var newBox = document.getElementById('box');

var details = {
  color: 'red',
  name: 'Box',
  disappear: function(){
    newBox.style.visibility = 'hidden';
  }
}

function revealShape(){
  newBox.style.visibility = 'visible';
}

function magicTrick(){
  details.disappear();

  if(box !== null){
    box.style.background = 'Transparent';
  }
}

function revealColor(){
  details.color = prompt("What color do you want the box to be?");
  if(details.color === null || details.color === ''){
    details.color = 'red'; //default color
    alert("You didn't enter a color, so the box will be red.");
  }
  newBox.style.background = details.color;
}

function revealName(){
  details.name = prompt('what do you want to call the box?');
  if(details.name === null || details.name === ''){
    details.name = 'Rectangle';
    alert("You didn't enter a name so the box will be called Rectangle.");
  }
  newBox.innerHTML = details.name;
}

function changeColor(){
switch (box.style.background){
  case colors[0]:
    box.style.background = colors[1];
    break;

  case colors[1]:
    box.style.background = colors[2];
    break;

    case colors[2]:
      box.style.background = colors[3];
      break;

    case colors[3]:
      box.style.background = colors[4];
      break;

    default:
      box.innerHTML = "what the helly!"
      box.style.background = colors[0];
}
}


function TestColor(){

   var color = (box.style.background == 'red') ? 'blue' : 'red';
   box.style.background = color;
}


function changeColorAgain(){
   for(i = 0; i < colors.length; i++){
    box.innerHTML += "<p  style ='background-color:" + colors[i] + ";padding:10px; color:white; font-size:1.5em;'>" + colors[i] + "</p>";
   }
}



