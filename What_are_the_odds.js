function findOddSum(odd){
    let sum = 0;
    odd.forEach(element => {
        if(element % 2 == 1){
            sum += element;
        }
    });
    if(sum > 0){
        return sum;    }
}

// let numbers = [10, 20, 30, 40, 50];
let numbers = [5, 7, 8, 10, 45, 30];
const output = findOddSum(numbers);
console.log(output);