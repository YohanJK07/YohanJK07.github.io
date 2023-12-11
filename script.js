var button1 = document.getElementById('Piano');
    var a = document.getElementById('pianoAudio');

var button2 = document.getElementById('Guiter');
    var b = document.getElementById('guitarAudio');

var button3 = document.getElementById('Droms');
    var c = document.getElementById('drumAudio');


function myPlay() {
    a.play();
} ;


document.getElementById('Piano').addEventListener("click", function() {
  a.play();
});

document.getElementById('Guiter').addEventListener("click", function() {
  b.play();
});

document.getElementById('Droms').addEventListener("click", function() {
  c.play();
});