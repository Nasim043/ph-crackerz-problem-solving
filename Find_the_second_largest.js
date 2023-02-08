function secondLargest(numbers) {
    let largestNum = numbers[0];
    let secondLargestNum = numbers[0];
    numbers.forEach(element => {
        if (element > largestNum) {
            secondLargestNum = largestNum;
            largestNum = element;
        }
        else if (element < largestNum && element > secondLargestNum) {
            secondLargestNum = element;
        }
    });

    return secondLargestNum;
}

let numbers = [10, 33, 5, 99, 6];
let output = secondLargest(numbers);
console.log(output)