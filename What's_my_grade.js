function findGrade(marks){
    let grade = '';
    if(marks>=80) grade = 'A';
    else if(marks>=60) grade = 'B';
    else if(marks>=50) grade = 'C';
    else if(marks>=40) grade = 'D';
    else grade = 'F';
    return grade;
}

const output = findGrade(95);
console.log(output);