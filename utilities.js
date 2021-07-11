const colour_val= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Create random colour value
function createColour() {
    return "#" + colour_val[getRandom(0, 15)]
        + colour_val[getRandom(0, 15)]
        + colour_val[getRandom(0, 15)]
        + colour_val[getRandom(0, 15)]
        + colour_val[getRandom(0, 15)]
        + colour_val[getRandom(0, 15)];
}