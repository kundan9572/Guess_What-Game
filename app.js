const name = ["TAJMAHAL", "MSDHONI", "LADAKH", 'HAWAMAHAL', 'HARRYPOTER', 'PARLIAMENT', 'SACHINTENDULKAR', 'STARWAR', 'SOCCER', 'SOLARSYSTEM', 'APJABDULKALAM', 'DILBECHARA', 'ANACONDA', 'BABURAO']


// code to generate random color 

function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
    let BgColor = document.getElementById('color-overlay');
    BgColor.style.backgroundColor = generateRandomColor();
}

function checkBg() {
    generateRandomColor();
    changeBackgroundColor();
}

setInterval(checkBg, 100)

// code to take input when button is ckicked and stored in array
function myFunction() {
    //var btnV = ""
    var btnValue = document.getElementById("btn1").value;
    //btnV = btnValue;
    //document.getElementById("puzz1").innerHTML = btnValue;
    console.log(btnValue);
}


//searching the name and if present then print success else error

function validateAnswer() {
    var text, x;
    for (let i = 0; i < name.length; i++) {
        if (btnV === name[i]) { // btnV[i] will match  array input value with the initialized array
            return true;
        } else
            return false;
    }
}

//code to move to the next question