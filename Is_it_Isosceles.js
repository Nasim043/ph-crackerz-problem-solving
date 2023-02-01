function checkTriangle(side1, side2, side3) {
    let isIsosceles = "";
    if (side1 == side2 && side2 == side3) isIsosceles = "No";
    else if ((side1 == side2 || side2 == side3 || side3 == side1)) {
        isIsosceles = "Yes";
    }
    return isIsosceles;
}

const output = checkTriangle(8, 8, 8);
console.log(output);
