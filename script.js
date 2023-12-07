//document.getElementById('woof').play()
//http://www.findsounds.com/ISAPI/search.dll
//playSound('woof');

// function playSound(id) { //play sound
//     if (document.getElementById(id)) {
//         var sound = document.getElementById(id); //setup audio
//         sound.currentTime = 0; //reset position of playback to zero  //sound.load();
//         sound.play();
//     }
// }

var button = document.getElementById('Paino');
    var a = document.getElementById('pianoAudio');

var button2 = document.getElementById('Guiter');
    var b = document.getElementById('guitarAudio');

var button3 = document.getElementById('Droms');
    var c = document.getElementById('drumAudio');


function myPlay() {
    a.play();
} ;


document.getElementById('Paino').addEventListener("click", function() {
  a.play();
});


