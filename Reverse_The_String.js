const reverseMaker = (word)=> {
    let reverseStr = '';
    for (let index = word.length - 1; index >= 0; index--) {
        reverseStr += word[index];
    }
    
    return reverseStr;
};

let str = "GeeksforGeeks";
// let str = "Nasim";
const output = reverseMaker(str);
console.log(output);