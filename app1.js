const name = [
    "TAJMAHAL",
    "MSDHONI",
    "LADAKH",
    "HAWAMAHAL",
    "HARRYPOTTER",
    "PARLIAMENT",
    "SACHINTENDULKAR",
    "STARWAR",
    "SOCCER",
    "SOLARSYSTEM",
    "APJABDULKALAM",
    "DILBECHARA",
    "ANACONDA",
    "BABURAO",
];

var music = document.getElementById("myAudio").play();

var btnvalue = document.getElementById("btn").value;
var textvalue = document.getElementById("puzz");
var temp = "";

function start(value) {
    temp += value;
    textvalue.value = temp;
}
document.getElementById("sbtn").addEventListener("click", validate);
document.getElementById("reject").addEventListener("click", reject);

var count = 0;

function validate() {
    for (let i = 0; i < name.length; i++) {

        if (temp == name[i]) {
            alert("Correct Answer");
            break;
        } else
            count++;
    }
    if (count === 14)
        alert("Wrong Answer");
}


function reject() {
    temp = [];
    textvalue.value = temp;
}



// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green",
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD,
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD,
    },
};

const TIME_LIMIT = 28;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
    clearInterval(timerInterval, show());

}

function show() {
    setTimeout(show1, 100)

}

function show1() {
    alert("TIME UP")
    window.location.href = "level.html";


    // function abc() {
    //     google.script.run.withSuccessHandler(callback).processForm(document.forms[0]);
    // }

}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
        }

    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const {
        alert,
        warning,
        info
    } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

// to open it in full screen 

// var elem = document.documentElement;

// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) {
//         /* Firefox */
//         elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) {
//         /* Chrome, Safari & Opera */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) {
//         /* IE/Edge */
//         elem.msRequestFullscreen();
//     }
// }

// function callback(ste) {
//     if (ste == "true") {
//         var a = document.getElementById('log');
//         document.write(a.value);
//         document.write('<a href="http://www.w3schools.com/js/js_htmldom_html.asp">do stuff</a>');
//     } else document.write("false");
// }