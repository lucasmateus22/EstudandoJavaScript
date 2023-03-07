

window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var hours = 00;

    var appendTens = document.getElementById("tens");
    var appendSedonds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");


    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);

        Interval = setInterval(startTimer, 10);
        console.log("start")
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
        console.log("parar")
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = '00';

        seconds = '00';

        minutes = '00';

        hours = '00';

        appendTens.innerHTML = tens;

        appendSedonds.innerHTML = seconds;

        appendMinutes.innerHTML = minutes;

        appendHours.innerHTML = hours;

    }
    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSedonds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSedonds.innerHTML = seconds;
        }
        if(seconds > 59){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if(minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
        if(minutes > 59){
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
    }
}
    let buttonStop = function(){    
}