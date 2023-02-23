

var timer;
var sec = 0
var min = 0
var d = 1
var gold = 50
var investedGold = 0

var ob1 = false
var ob2 = false
var ob3 = false
var ob4 = false
var ob5 = false
var ob6 = false
var ob7 = false
var ob8 = false
var ob9 = false
var ob10 = false
var ob11 = false
var ob12 = false
var ob13 = false
var ob14 = false
var ob15 = false
var ob16 = false
var ob17 = false
var ob18 = false
var ob19 = false

var bonfire = false
var bonfireLevel = 0
var bonfireMaxLevel = 10
var bonfirePrice = 30*(bonfireLevel+1)**2
var bonfireBonus = 1*houseLevel

var house = false
var houseLevel = 0
var houseMaxLevel = 5
var housePrice = 50*(houseLevel+1)**2
var houseBonus = 100*houseLevel

var fisher = false
var fisherLevel = 0
var fisherMaxLevel = 5
var fisherPrice = 150*(fisherLevel+1)
var fisherBonus = 600*fisherLevel

var crops = false
var cropsLevel = 0
var cropsMaxLevel = 10
var cropsPrice = parseInt(150*((cropsLevel+1)*1.2)**2)
var cropsBonus = parseInt(300*cropsLevel**3)

var blacksmith = false
var blacksmithLevel = 0
var blacksmithMaxLevel = 5
var blacksmithPrice = 300*(blacksmithLevel+1)
var blacksmithBonus = 200*blacksmithLevel

var stable = false
var stableLevel = 0
var stableMaxLevel = 5
var stablePrice = (300+((stableLevel+1)*100))*5
var stableBonus = 600*stableLevel

var barracks = false
var barracksLevel = 0
var barracksMaxLevel = 3
var barracksPrice = 1000+(barracksLevel+1)*1000
var barracksBonus = 1000+(barracksLevel-1)*1000

var market = false
var marketLevel = 0
var marketMaxLevel = 3
var marketPrice = 1000*((marketLevel+1)**(marketLevel+2))
var marketBonus = marketPrice*marketLevel**3


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
    countTime();
    countGold();
    updateValues()

}

function updateValues(){
    if (gold>0){
        document.getElementById("gold").innerHTML = "+"+gold
    }
    else{
        document.getElementById("gold").innerHTML = gold
    }

    document.getElementById("invested-gold").innerHTML = "Ouro investido: +"+investedGold

    updateObjectives()
    updateBonfireValues()
    updateHouseValues()
    updateFisherValues()
    updateCropsValues()
    updateBlacksmithValues()
    updateStableValues()
    updateBarracksValues()
    updateMarketValues()
    
}
function start(){
    timer = setInterval(contador, 250);
    document.getElementById("start").disabled = true
}
function pause(){
    clearInterval(timer);
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
    if(bonfire){
        gold+=bonfireBonus
    }
    if(house && min%3===0 && sec===0){
        gold+=houseBonus
    }
    if(fisher && min%6===0 && sec===0){
        gold+=fisherBonus
    }
    if(crops && min%12===0 && sec===0){
        gold+=cropsBonus
    }
    if(blacksmith && min%2===0 && sec===0){
        gold+=blacksmithBonus
    }
    if(stable && sec===0){
        gold+=stableBonus
    }
    if(barracks && sec===0){
        gold+=barracksBonus
    }
    if(market && min===0 && sec===0){
        gold+=marketBonus
    }

    if (gold>0){
        document.getElementById("gold").innerHTML = "+"+gold
    }
    else{
        document.getElementById("gold").innerHTML = gold
    }
    
}
function updateObjectives(){
    objectiveOne()
    objectiveTwo()
    objectiveThree()
    objectiveFour()
    objectiveFive()
    objectiveSix()
    objectiveSeven()
    objectiveEight()
    objectiveNine()
    objectiveTen()
    objectiveEleven()
    objectiveTwelve()
    objectiveThirteen()
    objectiveFourteen()
    objectiveFifteen()
    objectiveSixteen()
    objectiveSeventeen()
    objectiveEighteen()
    objectiveNineteen()
}

// Buildings functions

function buyBonfire(){
    if(gold >= bonfirePrice){
        gold-=bonfirePrice
        investedGold += bonfirePrice
        bonfire = true;
        bonfireLevel += 1
        document.getElementById("bonfire").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Fogueira comprada!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
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

function buyHouse(){
    if(gold >= housePrice){
        gold-=housePrice
        investedGold += housePrice
        house = true;
        houseLevel += 1
        document.getElementById("house").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Casa comprada!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
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

function buyFisher(){
    if(gold >= fisherPrice){
        gold-=fisherPrice
        investedGold += fisherPrice
        fisher = true;
        fisherLevel += 1
        document.getElementById("fisher").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Galpão dos Pescadores comprado!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateFisherValues(){
    fisherPrice = 150*(fisherLevel+1)
    fisherBonus = 600*fisherLevel

    if(fisherLevel === fisherMaxLevel){
        document.getElementById("buy-fisher").disabled = true
        document.getElementById("fisher-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-fisher").innerHTML = fisherPrice + " ouro"
        document.getElementById("fisher-level").innerHTML = "Nível "+fisherLevel+"/"+fisherMaxLevel
    }
    document.getElementById("fisher-bonus").innerHTML = "+"+fisherBonus+"/6h"

}

function buyCrops(){
    if(gold >= cropsPrice){
        gold-=cropsPrice
        investedGold += cropsPrice
        crops = true;
        cropsLevel += 1
        document.getElementById("crops").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Horta comprada!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateCropsValues(){
    cropsPrice = parseInt(150*((cropsLevel+1)*1.2)**2)
    cropsBonus = parseInt(300*cropsLevel**3)

    if(cropsLevel === cropsMaxLevel){
        document.getElementById("buy-crops").disabled = true
        document.getElementById("crops-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-crops").innerHTML = cropsPrice + " ouro"
        document.getElementById("crops-level").innerHTML = "Nível "+cropsLevel+"/"+cropsMaxLevel
    }
    document.getElementById("crops-bonus").innerHTML = "+"+cropsBonus+"/12h"

}

function buyBlacksmith(){
    if(gold >= blacksmithPrice){
        gold-=blacksmithPrice
        investedGold += blacksmithPrice
        blacksmith = true;
        blacksmithLevel += 1
        document.getElementById("blacksmith").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Ferreiro comprado!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateBlacksmithValues(){
    blacksmithPrice = 300*(blacksmithLevel+1)
    blacksmithBonus = 200*blacksmithLevel

    if(blacksmithLevel === blacksmithMaxLevel){
        document.getElementById("buy-blacksmith").disabled = true
        document.getElementById("blacksmith-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-blacksmith").innerHTML = blacksmithPrice + " ouro"
        document.getElementById("blacksmith-level").innerHTML = "Nível "+blacksmithLevel+"/"+blacksmithMaxLevel
    }
    document.getElementById("blacksmith-bonus").innerHTML = "+"+blacksmithBonus+"/2h"

}

function buyStable(){
    if(gold >= stablePrice){
        gold-=stablePrice
        investedGold += stablePrice
        stable = true;
        stableLevel += 1
        document.getElementById("stable").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Estábulo comprado!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateStableValues(){
    stablePrice = (300+((stableLevel+1)*100))*5
    stableBonus = 600*stableLevel

    if(stableLevel === stableMaxLevel){
        document.getElementById("buy-stable").disabled = true
        document.getElementById("stable-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-stable").innerHTML = stablePrice + " ouro"
        document.getElementById("stable-level").innerHTML = "Nível "+stableLevel+"/"+stableMaxLevel
    }
    document.getElementById("stable-bonus").innerHTML = "+"+stableBonus+"/h"

}

function buyBarracks(){
    if(gold >= marketPrice){
        gold-=barracksPrice
        investedGold += barracksPrice
        barracks = true;
        barracksLevel += 1
        document.getElementById("barracks").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Centro de Treinamento comprado!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateBarracksValues(){
    barracksPrice = 1000+(barracksLevel+1)*1000
    barracksBonus = 1000+(barracksLevel-1)*1000

    if(barracksLevel === barracksMaxLevel){
        document.getElementById("buy-barracks").disabled = true
        document.getElementById("barracks-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-barracks").innerHTML = barracksPrice + " ouro"
        document.getElementById("barracks-level").innerHTML = "Nível "+barracksLevel+"/"+barracksMaxLevel
    }
    document.getElementById("barracks-bonus").innerHTML = "+"+barracksBonus+"/h"

}

function buyMarket(){
    if(gold >= marketPrice){
        gold-=marketPrice
        investedGold += marketPrice
        market = true;
        marketLevel += 1
        document.getElementById("market").style.visibility = "visible"
        document.getElementById("message").style.color = "green"
        document.getElementById("message").innerHTML = "Mercado comprado!"
    }
    else{
        document.getElementById("message").style.color = "red"
        document.getElementById("message").innerHTML = "Ouro insuficiente!"
    }
    updateValues()
}
function updateMarketValues(){
    marketPrice = 1000*((marketLevel+1)**(marketLevel+2))
    marketBonus = marketPrice*marketLevel**3

    if(marketLevel === marketMaxLevel){
        document.getElementById("buy-market").disabled = true
        document.getElementById("market-level").innerHTML = "Nível Máximo"
    }
    else{
        document.getElementById("buy-market").innerHTML = marketPrice + " ouro"
        document.getElementById("market-level").innerHTML = "Nível "+marketLevel+"/"+marketMaxLevel
    }
    document.getElementById("market-bonus").innerHTML = "+"+marketBonus+"/dia"

}

// Objectives functions

function objectiveOne(){
    if(gold>=1000){
        ob1 = true
    }
    if(ob1){
        document.getElementById("ob1").style.color = "green"
        document.getElementById("ob1").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob1").innerHTML = gold+"/1000"
    }
}
function objectiveTwo(){
    if(gold>=5000){
        ob2 = true
    }
    if(ob2){
        document.getElementById("ob2").style.color = "green"
        document.getElementById("ob2").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob2").innerHTML = gold+"/5000"
    }
}
function objectiveThree(){
    if(gold>=10000){
        ob3 = true
    }
    if(ob3){
        document.getElementById("ob3").style.color = "green"
        document.getElementById("ob3").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob3").innerHTML = gold+"/10000"
    }
}
function objectiveFour(){
    if(gold>=100000){
        ob4 = true
    }
    if(ob4){
        document.getElementById("ob4").style.color = "green"
        document.getElementById("ob4").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob4").innerHTML = gold+"/100000"
    }
}
function objectiveFive(){
    if(gold>=1000000){
        ob5 = true
    }
    if(ob5){
        document.getElementById("ob5").style.color = "green"
        document.getElementById("ob5").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob5").innerHTML = gold+"/1000000"
    }
}
function objectiveSix(){
    if(bonfireLevel===bonfireMaxLevel){
        ob6 = true
    }
    if(ob6){
        document.getElementById("ob6").style.color = "green"
        document.getElementById("ob6").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob6").innerHTML = bonfireLevel+"/"+bonfireMaxLevel
    }
}
function objectiveSeven(){
    if(houseLevel===houseMaxLevel){
        ob7 = true
    }
    if(ob7){
        document.getElementById("ob7").style.color = "green"
        document.getElementById("ob7").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob7").innerHTML = houseLevel+"/"+houseMaxLevel
    }
}
function objectiveEight(){
    if(fisherLevel===fisherMaxLevel){
        ob8 = true
    }
    if(ob8){
        document.getElementById("ob8").style.color = "green"
        document.getElementById("ob8").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob8").innerHTML = fisherLevel+"/"+fisherMaxLevel
    }
}
function objectiveNine(){
    if(cropsLevel===cropsMaxLevel){
        ob9 = true
    }
    if(ob9){
        document.getElementById("ob9").style.color = "green"
        document.getElementById("ob9").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob9").innerHTML = cropsLevel+"/"+cropsMaxLevel
    }
}
function objectiveTen(){
    if(blacksmithLevel===blacksmithMaxLevel){
        ob10 = true
    }
    if(ob10){
        document.getElementById("ob10").style.color = "green"
        document.getElementById("ob10").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob10").innerHTML = blacksmithLevel+"/"+blacksmithMaxLevel
    }
}
function objectiveEleven(){
    if(stableLevel===stableMaxLevel){
        ob11 = true
    }
    if(ob11){
        document.getElementById("ob11").style.color = "green"
        document.getElementById("ob11").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob11").innerHTML = stableLevel+"/"+stableMaxLevel
    }
}
function objectiveTwelve(){
    if(barracksLevel===barracksMaxLevel){
        ob12 = true
    }
    if(ob12){
        document.getElementById("ob12").style.color = "green"
        document.getElementById("ob12").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob12").innerHTML = barracksLevel+"/"+barracksMaxLevel
    }
}
function objectiveThirteen(){
    if(marketLevel===marketMaxLevel){
        ob13 = true
    }
    if(ob13){
        document.getElementById("ob13").style.color = "green"
        document.getElementById("ob13").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob13").innerHTML = marketLevel+"/"+marketMaxLevel
    }
}
function objectiveFourteen(){
    if(investedGold>=1000){
        ob14 = true
    }
    if(ob14){
        document.getElementById("ob14").style.color = "green"
        document.getElementById("ob14").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob14").innerHTML = investedGold+"/"+1000
    }
}
function objectiveFifteen(){
    if(investedGold>=10000){
        ob15 = true
    }
    if(ob15){
        document.getElementById("ob15").style.color = "green"
        document.getElementById("ob15").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob15").innerHTML = investedGold+"/"+10000
    }
}
function objectiveSixteen(){
    if(investedGold>=100000){
        ob16 = true
    }
    if(ob16){
        document.getElementById("ob16").style.color = "green"
        document.getElementById("ob16").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob16").innerHTML = investedGold+"/"+100000
    }
}
function objectiveSeventeen(){
    if(investedGold>=200000){
        ob17 = true
    }
    if(ob17){
        document.getElementById("ob17").style.color = "green"
        document.getElementById("ob17").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob17").innerHTML = investedGold+"/"+200000
    }
}
function objectiveEighteen(){
    if(investedGold>=35000 && d===2 && min===0 && sec<=1){
        ob18 = true
    }
    else if(investedGold<=35000 && d===2 && min===0 && sec<=1){
        document.getElementById("ob18").style.color = "red"
        document.getElementById("ob18").innerHTML = "Falhou!"
    }
    if(ob18){
        document.getElementById("ob18").style.color = "green"
        document.getElementById("ob18").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob18").innerHTML = investedGold+"/"+35000
    }
}
function objectiveNineteen(){
    if(bonfireLevel===bonfireMaxLevel && houseLevel===houseMaxLevel && fisherLevel===fisherMaxLevel &&
        cropsLevel===cropsMaxLevel && blacksmithLevel===blacksmithMaxLevel && stableLevel===stableMaxLevel &&
        barracksLevel===barracksMaxLevel && marketLevel===marketMaxLevel){
        ob19 = true
    }
    if(ob17){
        document.getElementById("ob19").style.color = "green"
        document.getElementById("ob19").innerHTML = "Concluído!"
    }else{
        document.getElementById("ob19").innerHTML = "-"
    }
}