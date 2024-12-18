function Call_Loop() {
    var number = "";
    var x = 1;
    while (x < 15) {
        number += x + "<br>";
        x++
    }
    document.getElementById("Loop").innerHTML = number;
}

function length_function() {
    let text = document.getElementById("text_lenght").innerHTML;        // get  sentence
    let sentence_length = text.length;                                       // gets length of string
    document.getElementById("demo").innerHTML = "The lenght is: " + sentence_length;         // display result
}