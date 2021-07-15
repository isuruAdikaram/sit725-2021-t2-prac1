
var textsArray = ["text 1","text 2","text 3","text 4"];

function changeText(){
    
    document.getElementById("heading").innerHTML= textsArray[getRndInteger(0,textsArray.length-1)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
