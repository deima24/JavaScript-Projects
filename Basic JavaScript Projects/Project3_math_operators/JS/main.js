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