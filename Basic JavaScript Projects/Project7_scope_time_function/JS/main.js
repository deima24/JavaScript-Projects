var x = 8;
function oneTry() {
    document.write(10 + x + "<br>");        // global variable
}

function twotry() {
    document.write(x + 20 + "<br>");        // global variable
}

oneTry();
twotry();

function treeTry() {
    var z = 10;
    console.log(5 + z);                     // function with local variable
}

function fourtry() {
    console.log(z + 10);                    // function with no local variable
}

treeTry();
fourtry();


