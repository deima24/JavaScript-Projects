//addition
function addition_function() {      // naming function
    var add = 7 + 8;
    document.getElementById("Math").innerHTML = "7 + 8 = " + add;       // print result
}


//subtraction
function subtraction_function() {       //naming function
    var y = 10 - 2;
    document.getElementById("subtract").innerHTML ="10 - 2 = " + y;     // print result
}


// multiplication
function multiplication_function() {        //naming function
    var multi_math = 5 * 8;
    document.getElementById("multi").innerHTML = "5 x 8 = " + multi_math;   // printing result
}



//division
function division_function() {      //naming function
    var divi_math = 50 / 5;
    document.getElementById("divi").innerHTML = "50 / 5 = " + divi_math;    // returning result
}



// Multiple Operations
function Multiple_Operation() {     // naming function
    var multiple_Math = (2 + 5) * 5 / 7 - 3;
    document.getElementById("multiple").innerHTML = "(2 + 5) * 5 / 7 - 3 = " + multiple_Math;       // printing result
}

// moduls operator
function Moduls_Operator() {        // naming function
    var modul_Operator = 25 % 6;
    document.getElementById("modul").innerHTML = "25 devided by 6 you get remainder: " + modul_Operator;    // print result
}


// negation operator
function Negation_Operator()  {     // naming function
    var Negation_Operators = 6;
    document.getElementById("negation").innerHTML = -Negation_Operators;        // returning result
}


var e = 6;

//increment number
function incrementNumber() {        // naming function
    e++;
    document.getElementById("counter").innerHTML = e;       // returning incrementer result
}


//decrement number
function decrementNumber() {        // naming function
    e--;
    document.getElementById("counter").innerHTML = e;       // returning decremented result
}

// random number
function random_Number(min, max) {      // naming function
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // gets a whole number
    document.getElementById("math_random").innerHTML = randomNum;
    return randomNum;                                               // returning result
}