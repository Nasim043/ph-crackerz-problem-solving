function findingSmallest ( numbers ) {
    let small = numbers[0];
    numbers.forEach(element => {
        if(element<small) small = element;
    });
    return small;
}

let numbers = [10,33,5,99,6,2,1];
const output = findingSmallest(numbers);
console.log(output);