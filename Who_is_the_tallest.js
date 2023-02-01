function tallestFriend(height){
    let talest = 0;
    height.forEach(element => {
        if (element>talest) {
            talest = element;
        }
    });
    return talest;
}


const height = [157,134,188];
const output = tallestFriend(height);
console.log(output);