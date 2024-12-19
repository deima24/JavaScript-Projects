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


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function car_Array_Function() {
    var cars = [" Audi ", " BMW ", " Ford ", " Volvo ", " Mercedez "];
    document.getElementById("car_Array").innerHTML = "This is a car list: " + cars;
}

const myObject = {
    name: "Tom",
    age: "25",
    city: "London"
};

function constant_function() {
    myObject.age = 35;
    myObject.country = "UK";
    document.getElementById("Constant").innerHTML = "Name " + myObject.name + ". Age is " + myObject.age + " Lives in " + myObject.city + " Country is " + myObject.country;
}