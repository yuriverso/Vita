

var timer;
var seg = 0
var min = 0
var h = 0

function adicionar(){
    seg += 1;

    if(seg===60){
        min++;
        document.getElementById("min").innerHTML = min;
        seg=0;
    }
    if(min===60){
        h+=1;
        document.getElementById("h").innerHTML = h;
    }
    
    document.getElementById("seg").innerHTML = seg;
}

function start(){
    timer = setInterval(adicionar, 1000);
    document.getElementById("start").disabled = true
}
function stop(){
    clearInterval(timer);
    seg = min = h = 0;
    document.getElementById("start").disabled = false
}