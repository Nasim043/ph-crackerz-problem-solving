function countZeros ( binary_num ) {
    let zeroCount  = 0;
    for (let i = 0; i < binary_num.length; i++) {
       if(binary_num[i] === '0') zeroCount++;
    }
    return zeroCount;
}
let output = countZeros('111111');
console.log(output);