function car_function() {
    var car_choise;
    var cars = document.getElementById("car_input").value;
    var car_string = " is a good car!";
    switch(cars) {
        case "Toyota":
        car_choise = "Toyota" + car_string;
        break;
        case "Ford":
        car_choise = "Ford" + car_string;
        break;
        case "Honda":
        car_choise = "Honda" + car_string;
        break;
        case "Volvo":
        car_choise = "Volvo" + car_string;
        break;
        case "BMW":
        car_choise = "BMW" + car_string;
        break;
        case "Audi":
        car_choise = "Audi" + car_string;
        break;
        default:
        car_choise = "Please enter a car how it is written above.";
    }
    document.getElementById("car_output").innerHTML = car_choise;
}

const myCanvas = document.getElementById("canva");
const ctx = myCanvas.getContext("2d");
// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
