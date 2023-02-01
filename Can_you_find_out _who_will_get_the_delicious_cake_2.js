function JimOrDelaOrChinku( marksOfJim, marksOfDela, marksOfChinku ) {
    if(marksOfJim >= marksOfDela && marksOfJim >= marksOfChinku){
        return "Jim";
    }
    else if(marksOfDela >= marksOfJim && marksOfDela >= marksOfChinku){
        return "Dela";
    }
    return "Chinku";
}

const output = JimOrDelaOrChinku(104, 99, 100);
console.log(output);