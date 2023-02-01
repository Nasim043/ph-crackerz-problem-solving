function temperatureConverter(valNum) {
    let celsius;
    celsius = (valNum-32) / 1.8;
    return parseFloat(celsius.toFixed(2));
}

let output = temperatureConverter(50);
console.log(output)