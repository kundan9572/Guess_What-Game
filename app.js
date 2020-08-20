const name = [
  "TAJMAHAL",
  "MSDHONI",
  "LADAKH",
  "HAWAMAHAL",
  "HARRYPOTER",
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

console.log(name[0]);

// code to generate random color

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
  let BgColor = document.getElementById("color-overlay");
  BgColor.style.backgroundColor = generateRandomColor();
}

function checkBg() {
  generateRandomColor();
  changeBackgroundColor();
}

setInterval(checkBg, 100);

// Adding background music

var music = document.getElementById("myAudio");

// code to take input when button is ckicked and stored in array
var btnvalue = document.getElementById("btn").value;
var textvalue = document.getElementById("text");
//console.log(btnvalue);
//console.log(textvalue);

var temp = "";
var count = 0;

function start(value) {
  temp += value;
  textvalue.value = temp;
}

var btn1value = document.getElementById("btn1").value;
var text1value = document.getElementById("puzz2");
var temp1 = "";
function start1(value) {
  temp1 += value;
  text1value.value = temp1;
}

var btn2value = document.getElementById("btn2").value;
var text2value = document.getElementById("puzz3");
var temp2 = "";
function start2(value) {
  temp2 += value;
  text2value.value = temp2;
}

var btn3value = document.getElementById("btn3").value;
var text3value = document.getElementById("puzz4");
var temp3 = "";
function start3(value) {
  temp3 += value;
  text3value.value = temp3;
}

var btn4value = document.getElementById("btn4").value;
var text4value = document.getElementById("puzz5");
var temp4 = "";
function start4(value) {
  temp4 += value;
  text4value.value = temp4;
}

//submit button

document.getElementById("sbtn1").addEventListener("click", validate);
document.getElementById("sbtn2").addEventListener("click", validate1);
document.getElementById("sbtn3").addEventListener("click", validate2);
document.getElementById("sbtn4").addEventListener("click", validate3);
document.getElementById("sbtn5").addEventListener("click", validate4);

//searching the name and if present then print success else error

function validate() {
  for (let i = 0; i < name.length; i++) {
    if (temp == name[i]) {
      alert("Correct Answer");

      break;
    }
  }
  return alert("Wrong Answer");
}

function validate1() {
  for (let i = 0; i < name.length; i++) {
    if (temp1 == name[i]) {
      return alert("Correct Answer");
    }
  }
  return alert("Wrong Answer");
}

function validate2() {
  for (let i = 0; i < name.length; i++) {
    if (temp2 == name[i]) {
      alert("Correct Answer");
    }
  }
  return alert("Wrong Answer");
}

function validate3() {
  for (let i = 0; i < name.length; i++) {
    if (temp3 == name[i]) {
      alert("Correct Answer");
    }
  }
  return alert("Wrong Answer");
}

function validate4() {
  for (let i = 0; i < name.length; i++) {
    if (temp4 == name[i]) {
      alert("Correct Answer");
    }
  }
  return alert("Wrong Answer");
}

//code to move to the next question

//code to show the timer or stopwatch

// var id = 0;
// var second = 10;

// function timer() {
//     id = setInterval(changetime, 1000);

// }

// function changetime() {
//     document.getElementById("time").innerHTML = second + "sec";
//     second--;

//     // if (second == 0) clearInterval();
//     if (second === 0) {
//         window.location.href = "./level.html"
//     }
// }

// function stop() {
//     clearInterval(id);
// }

// timer  .............................................................

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

const TIME_LIMIT = 30;
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
  clearInterval(timerInterval);
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
  const { alert, warning, info } = COLOR_CODES;
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
