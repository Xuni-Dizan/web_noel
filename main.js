let x = 0;
let output = document.getElementById('output');
let meter = document.getElementById('meter');
output.innerHTML=x;

function plus() {
    if (x >= 10){
        return false;
    }
    if (x >= 4){
   meter.style.background = "#ff80ab"
   meter.style.filter = "drop-shadow(0 0 2.5px #ff80ab) drop-shadow(0 0 10px #ff80ab)"
    }
    if (x >= 8){
        meter.style.background = "#ff3385"
        meter.style.filter = "drop-shadow(0 0 2.5px #ff3385) drop-shadow(0 0 10px #ff3385)"
         }
  output.innerHTML= ++x;
  meter.style.height = x*10+'%' ;
}

function minus() {
    if (x <= 0){
        return false;
    }
    if (x <= 6){
        meter.style.background = "#f00"
        meter.style.filter = "drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)"
         }
  output.innerHTML= --x;
  meter.style.height = x*10+'%' ;
}