//Piano setup Yohan wrote the this code
var button1 = document.getElementById('Piano');
    var a = document.getElementById('pianoAudio');

//Guitar setup
var button2 = document.getElementById('Guiter');
    var b = document.getElementById('guitarAudio');

//Drums setup
var button3 = document.getElementById('Droms');
    var c = document.getElementById('drumAudio');


//Function that works piano button
function myPlay() {
    a.play();
} ;

//Piano button code
document.getElementById('Piano').addEventListener("click", function() {
  a.play();
});

//Guitar button code  
document.getElementById('Guiter').addEventListener("click", function() {
  b.play();
});

//Drums button code
document.getElementById('Droms').addEventListener("click", function() {
  c.play();
});
