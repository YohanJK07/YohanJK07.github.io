//document.getElementById('woof').play()
//http://www.findsounds.com/ISAPI/search.dll
//playSound('woof');

function playSound(id) { //play sound
    if (document.getElementById(id)) {
        var sound = document.getElementById(id); //setup audio
        sound.currentTime = 0; //reset position of playback to zero  //sound.load();
        sound.play();
    }
}