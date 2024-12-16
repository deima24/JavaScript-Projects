function slice_Method() {
    var Sentence = "This is my slice sentence example.";
    var Section = Sentence.slice(11,16);                                    // slice the sentence
    document.getElementById("slice").innerHTML = Section.toUpperCase();         // display sliced word and making it into upper case
}

function searchWord() {
    var text = "I'm searching for word."
    var position = text.search("searching");        // loking for searching word
    document.getElementById("searchMethod").innerHTML = "Position of word is: " + position;
}


function string_number() {
    var z = 1159;
    document.getElementById("number_string").innerHTML = "String number is: " + z.toString();       // making number value to a string
}

function precision_method() {
    var z = 123456.789123;
    document.getElementById("precision").innerHTML = "Precision number to 8 is: " + z.toPrecision(8);
}

function fixed_function() {
    let num = 6.56789;
    let z = num.toFixed();                  // creates fixed num

    document.getElementById("fixed_demo").innerHTML = z;        // displays fixed num
}

function value_of_function() {
    let num = 16;
    let z = num.valueOf();

    document.getElementById("value_of").innerHTML = z;
}