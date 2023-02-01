function JimOrDela(marksOfJim, marksOfDela) {
    if(marksOfJim >= marksOfDela){
        return "Jim";
    }
    return "Dela"
}

const output = JimOrDela(75,76);
console.log(output);