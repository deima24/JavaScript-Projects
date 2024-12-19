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

function return_Function() {
    return Math.random();
}
document.getElementById("return_result").innerHTML = return_Function();

let movie_info = {
    name: "Back to the Future",
    director: "Robert Zemeckis",
    year: 1985,
    genre: "Science Fiction/Adventure",
    description : function () {
        return "The movie " + this.name + " was directed by " + this.director + " , realesed in " + this.year + " and genre of movie is " + this.genre;
    }
};
document.getElementById("movie").innerHTML = movie_info.description();

// break loop
let text = "";
for (let i = 0; i < 10; i++) {
    if (i == 5) {break;}
    text += "The break loop: " + i + "<br>";
}
document.getElementById("break_loop").innerHTML = text;

// continue loop
let cont_loop = "";
for (let p = 0; p < 5; p++) {
    if (p == 3) {continue;}
    cont_loop += "The Continue loop: " + p +"<br>";
}
document.getElementById("continue_loop").innerHTML = cont_loop;