(function (window) {
    
    var speakWord = "Good Bye";
    
    
     byeSpeaker = function (names) {
        console.log(speakWord + " " + names);
     }

window.byeSpeaker = byeSpeaker

})(window);