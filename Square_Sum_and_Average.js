const calculate = (arrOfNumbers) => {
  let squareSum = 0;
  arrOfNumbers.forEach(element => {
    squareSum = squareSum + element * element;
  });
  return squareSum / arrOfNumbers.length;
}

const numbers = [4, 6, 10, 12];
const output = calculate(numbers);
console.log(output);