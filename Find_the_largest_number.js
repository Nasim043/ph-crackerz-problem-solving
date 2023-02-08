// given an array of three numbers
//  return the largest number using if-else

function findMax(arr) {
    let max = arr[0];
    if (arr[0] > arr[1] && arr[0] > arr[2]) max = arr[0];
    else if (arr[1] > arr[0] && arr[1] > arr[2]) max = arr[1];
    else max = arr[2];
    return max;
}

let numbers = [551, 100, 95];
const output = findMax(numbers);
console.log(output);