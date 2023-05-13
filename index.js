let homeScore = 0
let awayScore = 0

function incrementHome(value, team){
    homeScore += value
    document.getElementById("home-score").innerText = homeScore
}
function incrementAway(value){
    awayScore += value
    document.getElementById("away-score").innerText = awayScore
}
function reset(){
    homeScore=0
    awayScore=0
    document.getElementById("home-score").innerText = 0
    document.getElementById("away-score").innerText = 0
}