const findNames = (arrOfObj) => {
  const names = [];
  arrOfObj.forEach(obj => names.push(obj.name));
  return names;
}

const name = [
  { name: 'John', age: 20 },
  { name: 'Mary', age: 25 },
  { name: 'Peter', age: 30 }
];
const output = findNames(name);
console.log(output);