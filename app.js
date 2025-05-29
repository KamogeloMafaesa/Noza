var button = document.querySelector('button'); //querySelector=method
var box = document.getElementById('changeMe');
var colors = ['purple','red', 'blue', 'green', 'black'];

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




