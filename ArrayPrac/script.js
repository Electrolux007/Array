let leaderboard = ["Ken", "Ada", "Chidi", "Tolu", "Zainab"];

leaderboard.push("Femi") // This pushes Femi to the back of the leaderboard this returns the length of the array

leaderboard.unshift("Blessing") // This pushes Blessing to the front of the array abd also returns length
console.log(leaderboard);

let disqualifyOne = leaderboard.indexOf("Chidi") // So this finds the index of the removed individual and assigns it to a variable

console.log(disqualifyOne)

leaderboard.splice (disqualifyOne, 1) // This removes Chidi
console.log(leaderboard)

let isZainIn = leaderboard.includes("Zainab") // This checks whether Zainab is still in and if so it returns true else it returns false
console.log(isZainIn);

let bigThree = leaderboard.slice (0,3) // This copies the top three based on the specifying index and copies them question tho ifit starts at index 0 then goes to index 3 then it should show 4 not three
console.log(bigThree)

leaderboard.join( " -> " ) // And this just formats it the way you wanted w arrows

console.log(leaderboard.join( " -> " ))

document.getElementById("stuff").innerHTML = leaderboard.join( " -> " )
