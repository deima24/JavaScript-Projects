//addition
function addition_function(p1, p2) {
    return p1 + p2;
}

let x = addition_function(7, 8);
document.getElementById("Math").innerHTML = "7 + 8 = " + x;

//subtraction
function subtraction_function(s1, s2) {
    return s1 - s2;
}

let y = subtraction_function(10, 2);
document.getElementById("subtract").innerHTML ="10 - 2 = " + y;

// multiplication
function multiplication_function(m1, m2) {
    return m1 * m2;   
}

var multi_math = multiplication_function(5, 8);
document.getElementById("multi").innerHTML = "5 x 8 = " + multi_math;


//division
function division_function(d1, d2) {
    return d1 / d2;
}

var divi_math = division_function(50, 5);
document.getElementById("divi").innerHTML = "50 / 5 = " + divi_math;


// Multiple Operations
function Multiple_Operation() {
    var multiple_Math = (2 + 5) * 5 / 7 - 3;
    document.getElementById("multiple").innerHTML = "2 plus 5, multiply by 5, divided by 7 and subtracted by 3 = " + multiple_Math;
}

// moduls operator
function Moduls_Operator() {
    var modul_Operator = 25 % 6;
    document.getElementById("modul").innerHTML = "25 devided by 6 you get remainder: " + modul_Operator;
}


// negation operator
function Negation_Operator()  {
    var Negation_Operators = 6;
    document.getElementById("negation").innerHTML = -Negation_Operators;
}


var e = 6;

//increment number
function incrementNumber() {
    e++;
    document.getElementById("counter").innerHTML = e;
}


//decrement number
function decrementNumber() {
    e--;
    document.getElementById("counter").innerHTML = e;
}

// random number
function random_Number(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // gets a whole number
    document.getElementById("math_random").innerHTML = randomNum;
    return randomNum;
}