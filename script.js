

var timer;
var sec = 0
var min = 0
var h = 0
var d = 1
var gold = 950

var ob1 = false

var house = false
var houseLevel = 0
var houseMaxLevel = 5
var housePrice = 50*(houseLevel+1)**2
let houseBonus = 100*houseLevel

var bonfire = false
var bonfireLevel = 0
var bonfireMaxLevel = 10
var bonfirePrice = 30*(bonfireLevel+1)**2
let bonfireBonus = 1*houseLevel


updateValues()
// Main function
function contador(){
    sec += 1;
    if(sec===60){
        min++;
        document.getElementById("min").innerHTML = min;
        sec=0;
    }
    if(min===24){
        d+=1;
        min=0;
        document.getElementById("h").innerHTML = h;
    }
    document.getElementById("seg").innerHTML = sec;
    countTime();
    countGold();

}

function updateValues(){
    if (gold>0){
        document.getElementById("gold").innerHTML = "+"+gold
    }
    else{
        document.getElementById("gold").innerHTML = gold
    }
    updateObjectives()
    updateHouseValues()
    updateBonfireValues()
    
}
function start(){
    timer = setInterval(contador, 1000);
    document.getElementById("start").disabled = true
}
function pause(){
    clearInterval(timer);
    sec = min = h = 0;
    document.getElementById("start").disabled = false
}
function countTime(){
    var timeTracker = document.getElementById("timeTracker")
    var day = document.getElementById("day")

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
    day.innerHTML = "Dia "+d

}
function countGold(){
    if(house && min%3===0 && sec===0){
        gold+=houseBonus
    }
    if(bonfire){
        gold+=bonfireBonus
    }
    if (gold>0){
        document.getElementById("gold").innerHTML = "+"+gold
    }
    else{
        document.getElementById("gold").innerHTML = gold
    }
    
}
function updateObjectives(){
    //ob1
    if(gold>=1000){
        ob1 = true
    }
    if(ob1){
        document.getElementById("ob1").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob1").innerHTML = gold+"/1000"
    }
    
}

// Buildings functions

function buyHouse(){
    if(gold >= housePrice){
        gold-=housePrice
        house = true;
        houseLevel += 1
        document.getElementById("house").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Casa comprada!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Gold insuficiente!"
    }
    updateValues()
}
function updateHouseValues(){
    housePrice = 50*(houseLevel+1)**2
    houseBonus = 100*houseLevel
    
    if(houseLevel === houseMaxLevel){
        document.getElementById("buy-house").disabled = true
        document.getElementById("house-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-house").innerHTML = housePrice + " ouro"
        document.getElementById("house-level").innerHTML = "Nível "+houseLevel+"/"+houseMaxLevel
    }
    document.getElementById("house-bonus").innerHTML = "+"+houseBonus+"/3h"
}

function buyBonfire(){
    if(gold >= bonfirePrice){
        gold-=bonfirePrice
        bonfire = true;
        bonfireLevel += 1
        //document.getElementById("bonfire").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Fogueira comprada!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Gold insuficiente!"
    }
    updateValues()
}
function updateBonfireValues(){
    bonfirePrice = 30*(bonfireLevel+1)**2
    bonfireBonus = 1*bonfireLevel

    if(bonfireLevel === bonfireMaxLevel){
        document.getElementById("buy-bonfire").disabled = true
        document.getElementById("bonfire-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-bonfire").innerHTML = bonfirePrice + " ouro"
        document.getElementById("bonfire-level").innerHTML = "Nível "+bonfireLevel+"/"+bonfireMaxLevel
    }
    document.getElementById("bonfire-bonus").innerHTML = "+"+bonfireBonus+"/min"

}