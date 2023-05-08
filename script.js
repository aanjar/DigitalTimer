let [milliseconds, seconds] = [0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
} );

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds] = [0, 0];
    timeRef.innerHTML = "000 : 00";
} );

function displayTimer() {
    milliseconds += 1;
    if(milliseconds == 59) {
        milliseconds = 0;
        seconds++;
        if(seconds == 999){
            clearInterval(int);
        }
    }

    let s = seconds < 10 ? "0" + seconds : seconds < 100 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${s} : ${ms}`;
}

