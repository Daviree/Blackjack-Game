let scoreboard= document.getElementById("score1")
let scoreboard2= document.getElementById("score2")
let count=0
let counts= 0
function one() {
    count += 1
    scoreboard.innerText = count
}

function two() {
    count += 2
    scoreboard.innerText = count
}

function three() {
    count += 3
    scoreboard.innerText = count
}

function ones() {
    counts += 1
    scoreboard2.innerText = counts
}

function twos() {
    counts += 2
    scoreboard2.innerText = counts
}

function threes() {
    counts += 3
    scoreboard2.innerText = counts
}