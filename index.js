var mins=0;
var sec=0;
var minEl=document.getElementById("mins");
var secEl=document.getElementById("sec");
var btnStart=document.getElementById("btn-start");
var btnStop=document.getElementById("btn-stop");
var btnReset=document.getElementById("btn-reset");

var interval; //to store timer values

// this function will run when click on start

function startTimer(){
    sec++

    if(sec<9){
        secEl.innerHTML="0"+sec;
    }

    if(sec>9){
        secEl.innerHTML=sec;
    }
    if(sec>59){
        mins++;
        minEl.innerHTML="0"+mins;
        sec=0;
        secEl.innerHTML="0"+0;
    }
    if(mins>9){
        minEl.innerHTML=mins;
    }
    }

    btnStart.onclick=function(){
        interval=setInterval(startTimer, 100);
    }

    btnStop.onclick=function(){
        clearInterval(interval);
    }

    btnReset.onclick=function(){
        clearInterval(interval);
        mins="00";
        sec="00";
        minEl.innerHTML=mins;
        secEl.innerHTML=sec;
    }