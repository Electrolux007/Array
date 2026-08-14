let lapTimes = [58.2, 61.4, 55.9, 60.1, 57.3];
console.log("Lets get started");

let baseLap = lapTimes[0] // Base Value of Laptimes which is the first index every other item in the array is getting compared to

const findFastestLap = () =>{
    for (let i=1; i<lapTimes.length; i++){
        if (baseLap > lapTimes[i]){
            baseLap = lapTimes[i]
        }
    }
} // All this is a basically a function that finds the lowest laptime

findFastestLap()
console.log(baseLap);

console.log(lapTimes.indexOf(baseLap)); // This finds the index of the fastest time

lapTimes.splice(lapTimes.indexOf(baseLap), 1) // Removes the fastest time

console.log(lapTimes);


let totalLap = 0

let addedLap = () =>{
    for(let i=0; i<lapTimes.length; i++){
        totalLap += lapTimes[i]
    }
}  // Sum of whats left

addedLap()

console.log(totalLap);

let averageTime = totalLap / lapTimes.length
console.log(averageTime); // This is the average 

// As for you asking me for return value we havent been taught that in javascript so intergrate it into obejcts tutorial so i can get it better um lemme give you fastest lap as a variable

let fastestLap = baseLap
console.log(fastestLap);  // This is fastest lap






