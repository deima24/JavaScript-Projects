function my_Colors(){
    var colors = {
        Tree: "Green",
        Sun: "Yeallow",
        Sky: "Blue",
        Clouds: "White",
        Space: "Black"
    };
    delete colors.Clouds;           // removes from dictionatry
    document.getElementById("Dictionary").innerHTML = colors.Clouds;
}