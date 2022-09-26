
let timerText = document.getElementById("counter");
let count = 0;
function tick () {
    count+=1;
    timerText.innerText = count;
}
function intervalTimer() {
    setInterval(tick, 1000);
}
document.addEventListener('DOMContentLoaded', intervalTimer);


let plus1 = document.getElementById("plus");
function addOne() {
    timerText.innerText = (count+=1)
}
plus1.addEventListener('click', addOne)

let minus1 = document.getElementById("minus");
function subtractOne() {
    timerText.innerText = (count-=1)
}
minus1.addEventListener('click', subtractOne)

let like = document.getElementById("heart")
let likeTracker = document.querySelector(".likes")
let likedNumbers = {}
function addLike() {
    if (count in likedNumbers) {
        likedNumbers[count] = likedNumbers[count] + 1
        document.getElementById(count).innerText = `${count} - ${likedNumbers[count]}`
    }
    else {
        likedNumbers[count] = 1
        const li = document.createElement("li")
        li.id = count
        li.innerText = `${count} - ${likedNumbers[count]}`
        likeTracker.append(li)
    }
    console.log(likedNumbers)
}

like.addEventListener('click', addLike)

let stopper = document.querySelector("#pause")
let myInterval = -1
function stopTime() {
    // if paused, start
    if (myInterval === -1) {
        count = setInterval(function(){ 
            intervalTimer
        })
    }
    // if started, pause
    else {
        clearInterval(myInterval)
        myInterval = -1
    }
}
stopper.addEventListener('click', stopTime)