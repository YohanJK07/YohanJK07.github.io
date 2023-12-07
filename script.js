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

var button = document.getElementById('Paino'); // 

button.addEventListener('click', myPlay); 

function myPlay() {
    var a = document.getElementById('Paino');
    a.play();
} ;
