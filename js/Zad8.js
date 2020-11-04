const color = {cyan: 23, magenta: 12, yellow: 10}

function getMinColor(color) {
    let min = color.cyan;

    if (min > color.magenta) {
        if (color.magenta > color.yellow) {
            min = color.yellow;
        }
        else {
            min = color.magenta;
        }
    }
    else if (min > color.yellow) {
        min = color.yellow;
    }

    return min;
}

let minColor = getMinColor(color);

console.log("The min color is: " + minColor)