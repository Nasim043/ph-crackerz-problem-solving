// const deleteProperty = (arr) => {
//     console.log(Object.keys(arr[0]));
//     if(arr[0].hasOwnProperty(arr[1])){
//         delete arr[0].Object.keys(arr[0])[0];
//         return "YES";
//     }
//     return "NO";
// }

// let testArray = [
//     {
//         fname: 'John',
//     },
//     'fname'
// ];
// const output = deleteProperty(testArray);
// console.log(output);

let a = 10;
let b = 9;

a = a + b;
b = a - b;
a = a - b;

console.log(a,b);