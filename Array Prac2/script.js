let sessionScores = [120, 85, 200, 95, 150];

sessionScores.push(175) // This pushes 175 into the back of the array and returns length

// So here we are trying to find the lowest score in the array using a for loop my idea is to compare each value against the first and if one is smaller it becomes the new base value
let baseValue = sessionScores[0]

const findLowsestScore = () =>{
    for (let i=0; i<sessionScores.length; i++ ){
        if(sessionScores[i]<baseValue){
            baseValue = sessionScores[i]
            // console.log(sessionScores[i] + " is the lowest value")
        }
    } return baseValue
}
let result = findLowsestScore()
console.log(result); // So this is the defintiive answer to Number 2

let indexOfLowsest = sessionScores.indexOf(baseValue) // So what this does is that it finds the index of the lowest value in the array
console.log(indexOfLowsest);
sessionScores.splice(indexOfLowsest, 1) // And this removes the lowest scores
console.log(sessionScores);

//So this part was crazy so lemme try to explain it

let firstValue = sessionScores[0] // This creates a variable firstValue as sessionScores[0] which is 120

const addingSessionScores = () =>{  // A function cos i like wrapping stuff in fucntions
    for (let i=1;i<sessionScores.length;i++){ // A for loop for the addition note that im using i=1 cos we've already defined the initial vakue to add which is 120
        let finalValue = firstValue += sessionScores[i] // So this line does the heavylifting supposedly and basically just adds firstValue to session scores and saves the aded value as firstValue and the loop repeats 
        // console.log(finalValue); // This just logs the total value
        
    }
}
addingSessionScores()
let totalScore = firstValue
console.log(totalScore);

let averageScore = totalScore / sessionScores.length
console.log(averageScore);

let recentTwo = sessionScores.slice(sessionScores.length-2,sessionScores.length)
console.log(recentTwo);
console.log("Total : " + totalScore + " | Average : " + averageScore + " | Recent :" + recentTwo.join(" ->"));






