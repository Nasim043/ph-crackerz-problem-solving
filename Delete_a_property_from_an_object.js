const deleteProperty = (arr) => {
    if (arr[0].hasOwnProperty(arr[1])) {
        delete arr[0][arr[1]];
        return "YES";
    }
    return "NO";
}

let testArray = [
    {
        fname: 'Mithila',
    }, 'fname'
];
const output = deleteProperty(testArray);
console.log(output);