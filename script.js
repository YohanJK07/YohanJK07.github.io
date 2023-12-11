//Piano setup
var button1 = document.getElementById('Piano');
    var a = document.getElementById('pianoAudio');

//Guitar setup
var button2 = document.getElementById('Guiter');
    var b = document.getElementById('guitarAudio');

//Drums setup
var button3 = document.getElementById('Droms');
    var c = document.getElementById('drumAudio');


function myPlay() {
    a.play();
} ;

//Piano button
document.getElementById('Piano').addEventListener("click", function() {
  a.play();
});

//Guitar button
document.getElementById('Guiter').addEventListener("click", function() {
  b.play();
});

//Drums button
document.getElementById('Droms').addEventListener("click", function() {
  c.play();
});
