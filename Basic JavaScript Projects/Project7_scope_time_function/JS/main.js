var x = 8;
function oneTry() {
    document.write(10 + x + "<br>");        // global variable
}

function twotry() {
    document.write(x + 20);        // global variable
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


function get_Hours() {
    var currentDate = new Date();
    var hours = currentDate.getHours()
    document.getElementById("dateHours").innerHTML = hours;
}

function get_Night() {
    if (new Date().getHours() >= 21) {
        document.getElementById("myTime").innerHTML = "Good night."
    }
    else 
    document.getElementById("myTime").innerHTML = "Hello!"
}

function get_Age() {
    age = document.getElementById("age").value;
    if ( age >= 18) {
        Drive = "You are old enough to drive.";
    }
    else {
        Drive = "You are not old enaugh to drive.";
    }
    document.getElementById("your_Age").innerHTML = Drive;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}