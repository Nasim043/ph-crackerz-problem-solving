function finalScore ( scores ) {
    let final_score = 0;
    scores.forEach(element => {
        final_score += element; 
    });
    return final_score;
}

let numbers = [20, 13, 37];
const output = finalScore(numbers);
console.log(output);