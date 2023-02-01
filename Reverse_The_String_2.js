const reverseMaker = (word)=> {
    let reverseStr = word.split('').reverse().join("");
    return reverseStr;
};

let str = "GeeksforGeeks";
// let str = "Nasim";
const output = reverseMaker(str);
console.log(output);