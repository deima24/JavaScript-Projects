function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function KeyFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model + 
    " manufactured in " + Eric.Vehicle_Year;
}


function Book(title, author, genre, yearPublished, pages) {
    this.Book_title = title;
    this.Book_author = author;
    this.Book_genre = genre;
    this.Book_pages = pages;
    this.Book_yearPublished = yearPublished;
}

var book1 = new Book("1984", "George Orwell", "Dystopian", 1949, 328);
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960, 281);
var book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 1925, 180);
var book4 = new Book("The Catcher in the Rye", "J.D. Salinger", "Literary Fiction", 1951, 214);
function MyKeyFunction() {
    document.getElementById("My_keyword").innerHTML = "John read a book that is called " + book1.Book_title + ". Author of this book is " + book1.Book_author +
    ". Books genre is " + book1.Book_genre + ". This book has " + book1.Book_pages + " pages and it was published in " + book1.Book_yearPublished;
}

function outerFunction() {
    var outerMessage = "Hello from the outer function ";
    
    function innerFunction() {
        var innerMessage = "And hello from the inner function!";
        return outerMessage + innerMessage;
    }
    document.getElementById("Nested_Function").innerHTML = innerFunction();
}

