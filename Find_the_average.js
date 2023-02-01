// let arr = [75.25, 65, 80, 35.45, 99.50];
let arr = [100, 100, 100];
let sum = 0;
arr.forEach((element)=>{
    sum += element;
});
console.log(parseFloat((sum/arr.length).toFixed(2)));