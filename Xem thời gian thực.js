alert("Chào mừng các bạn đã đến với website theo dõi thời gian thực của mình");
alert("Cảm ơn các bạn đã ủng hộ👍")
var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer").textContent = "00:00:00";
}

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    var timeString = (hours < 10 ? "0" : "") + hours + ":" +
                     (minutes < 10 ? "0" : "") + minutes + ":" +
                     (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("timer").textContent = timeString;
}

