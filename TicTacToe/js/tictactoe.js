// this variable keeps track whose turn it is.
let activePlayer = "x";

// this array stores an array of moves. we use this to determine win condition
let selectedSquares = [];

// this function is for placing x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already
    // the .some() method is used to check each element of the selectSquare array 
    // to see if it conains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // thus variable retrieves the HMTL element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks who's turn it is
        if (activePlayer === "x") {
            // if activePlayer is equal to "x" , the x.png is place in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            // Active player may only be "x" or "o" so , if not "x" it must be "o"
        } else {
            // if activePlayer is equal to "o" the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array 
        selectedSquares.push(squareNumber + activePlayer);
        // this calls a function to check for any win conditions
        checkWinConditions();
        // this condition is for changing the active player
        if (activePlayer === "x") {
            // if active player is "x" change it to "o"
            activePlayer = "o";
            // if active player is anythig other then "x"
        } else {
            // change the activePlayer to "x"
            activePlayer = "x";
        }
        // this function plays placement sound 
        audio('./media/place.mp3');
        // this condition checks to see if it is the computers turn
        if (activePlayer === "o") {
            // this function disables clicking for computers turn
            disableClick();
            // this function waits 1sec before the computer places an image and enables click
            setTimeout(function () { computersTurn(); },  1000);
        }
        // returning true is needed for our computersTurn() function to work
        return true;
    }
    // this function results in a random square being selected be the computer 
    function computersTurn() {
        // this boolean is needed for our while loop
        let success = false;
        // this variable stores a random number 1 - 8
        let pickASquare;
        // this condition allows our while loop to keep trying is a square is selected already 
        while (!success) {
            // a random number between 0 - 8 is selected 
            pickASquare = String(Math.floor(Math.random() * 9));
            // if the random number evaluated returns true the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                // this line calls function 
                placeXOrO(pickASquare);
                // this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

// this function parses the selectedSquares arrasy to search for win condition
// drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    // x 0, 1, 2 condition.
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 100, 558, 100) }
    //x 3, 4, 5 condition
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50, 304, 558, 304) }
    // x 6, 7, 8 condition
    else if (arrayIncludes('6x', '7x', '8x')) { drawWinLine(50, 508, 558, 508) }
    // x 0, 3, 6 condition
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(100, 50, 100, 558) }
    // x 1, 4, 7 condition
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(304, 50, 304, 558) }
    // x 2, 5, 8 condition
    else if (arrayIncludes('2x', '5x', '8x')) { drawWinLine(508, 50, 508, 558) }
    // x 6, 4, 2 condition
    else if (arrayIncludes('6x', '4x', '2x')) { drawWinLine(100, 508, 510, 90) }
    // x 0, 4, 8 condition
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100, 100, 520, 520) }
    // o 0, 1, 2 condition
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100) }
    // o 3, 4, 5 condition
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304) }
    // o 6, 7, 8 condition
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508) }
    // o 0, 3, 6 condition
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558) }
    // o 1, 4, 7 condition
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558) }
    // o 2, 5, 8 condition
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558) }
    // o 6, 4, 2 condition
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90) }
    // o 0, 4, 8 condition
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520) }

    // this condition checks for a tie. If none of the above conditions are met and 
    // 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        // this function plays the tie game sound
        audio('./media/tie.mp3');
        // this function sets a .3 second timer before the reset game is called
        setTimeout(function () { resetGame(); }, 500);
    }

    // this function checks if an array includes 3 strings. It is used  to check for 
    // each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        // these 3 variables will be used to check for 3 in a row 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 variables we pass are all included in our array then
        // true is returned and our else if condition executes the drawLine() function
        if (a=== true && b === true && c === true) { return true; }
    }
}

// this function makes our body element temporarily unclickable
function disableClick() {
    // this makes our body unclickable 
    body.style.pointerEvents = 'none';
    // this makes our body clickable again after 1 second 
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// this function takes a string parameter of the path you set earlier for 
// placement sound 
function audio(audioURL) {
    // we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    // play method plays our audio sound 
    audio.play();
}
