

var timer;
var sec = 0
var min = 0
var h = 0
var d = 0

function adicionar(){
    sec += 1;
    if(sec===60){
        min++;
        document.getElementById("min").innerHTML = min;
        sec=0;
    }
    if(min===60){
        h+=1;
        document.getElementById("h").innerHTML = h;
    }
    document.getElementById("seg").innerHTML = sec;
    countTime();
}

function start(){
    timer = setInterval(adicionar, 1000);
    document.getElementById("start").disabled = true
}
function stop(){
    clearInterval(timer);
    sec = min = h = 0;
    document.getElementById("start").disabled = false
}

function countTime(){
    var timeTracker = document.getElementById("timeTracker")

    if(sec<10){
        seconds = "0"+String(sec)
    }else{
        seconds = String(sec)
    }
    if(min<10){
        minutes = "0"+String(min)
    }else{
        minutes = String(min)
    }
    timeTracker.innerHTML = minutes+":"+seconds

}