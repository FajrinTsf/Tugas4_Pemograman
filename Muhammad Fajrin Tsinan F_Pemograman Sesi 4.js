let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    },
]

let highestScore = studentsScore[0]; 

for (let i = 1; i < studentsScore.length; i++) {
    if (studentsScore[i].score > highestScore.score) {
        highestScore = studentsScore[i];
    }
}

console.log(`Nama: ${highestScore.name}, Nilai: ${highestScore.score}`);
