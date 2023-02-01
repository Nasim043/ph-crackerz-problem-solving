function findLeapYear(arrOfYears){
    let new_array = [];
    arrOfYears.forEach(element => {
        if((element % 400 == 0)||(element % 4 == 0 && element % 100 != 0)){
            new_array.push(element);
        }
    });
    if(new_array.length>0) return new_array; 
}

let numbers = [2023,2025,2030];
const output = findLeapYear(numbers);
console.log(output);