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
            setTimeout(function () { computersTurn();},  100);
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