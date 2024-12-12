document.write("20" + 8 + "<br>");
document.write((6 < 8) + "<br>");
document.write((6 == 6) + "<br>");
document.write((8 == 7) + "<br>");
console.log(5 + 3);
console.log( 5 < 3);

q = 5;
w = 5;
document.write((q === w) + "<br>");

a = 2;
s = "one";
document.write((a === s) + "<br>");

z = 4;
x = "4";
document.write((z === x) + "<br>");

e = 6;
d = 7;
document.write((e === d) + "<br>");

document.write((5 > 4 && 4 < 5) + "<br>");
document.write((3 > 4 && 4 < 5) + "<br>");

document.write((7 > 6 || 8 > 7) + "<br>");
document.write((7 > 8 || 8 > 9) + "<br>");


function my_Function1() {
    document.getElementById("Test1").innerHTML = 0 / 0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("This is string");
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("007");
}

function big_Number() {
    document.getElementById("bigNumber").innerHTML = (2E310);
}

function big_Negative_Number() {
    document.getElementById("bigNegativeNumber").innerHTML = (-3E310);
}

function not_function() {
    document.getElementById("not1").innerHTML = !(10 > 9);
    document.getElementById("not2").innerHTML = !(8 > 9);

}