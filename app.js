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
var arr = '';
arr = document.getElementById('a1').value;
console.log(arr)


//searching the name and if present then print success else error

//code to move to the next question