const checkEvenLength = (arrOfFriends) => {
  const newFeriends = arrOfFriends.filter(friend => friend.length % 2 === 0)
  return newFeriends;
}
const name = ['John', 'James', 'Jane', 'Ratul'];
const output = checkEvenLength(name);
console.log(output);