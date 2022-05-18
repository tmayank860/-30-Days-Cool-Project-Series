var colorpad=document.getElementById("colorpad");
var color=document.getElementById("color");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    let colorVal=getRandomColor();
        colorpad.style.backgroundColor=colorVal;
   document.getElementById("heading").style.color=colorVal;
   document.getElementById("btn").style.backgroundColor=colorVal;
    color.innerText=colorVal;
    colorpad.style.backgroundColor=colorVal ;
   color.innerText=colorVal;
  }