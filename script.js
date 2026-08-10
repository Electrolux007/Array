// const input = prompt("What's your age")
// const inputNum = Number(input)
// console.log(inputNum)
// if (isNaN (inputNum) || input === "")  {
//     console.log("Please enter a valid number");
// }   else {let final = inputNum >= 18 ? "You are an adult" : "You are a minor";
// console.log(final)}

let favGames = ["Fallout New Vegas", "Prey", "Devil May Cry 4", "Doom", "Witcher 3"]
// for (g = 0; g < favGames.length; g++)
const addBack = favGames.push("Sekiro")
console.log(addBack) // Pushes to the back and returns Length

const addFront = favGames.unshift("Borderlands 2")
console.log(addFront); // Pushes to the front and returns Length too

const removedItemBack = favGames.pop()
console.log(removedItemBack); // Removes from the back and returns removed item

const removedItemFront = favGames.shift()
console.log(removedItemFront); // Removes from the front and returns removed item

const splicerOne = favGames.splice(1, 0, "Metal Gear Solid V", "Bioshock")
console.log(splicerOne); // Just adds the items after Index One, This returns null since splice returns removed objects and we removed nothing 

const removedGames = favGames.splice(2,2) // 
console.log(typeof removedGames); //It says the data types are objects and removes 2 items starting from Index 2

favGames.splice(0, 1, "Doom Eternal", "Witcher Two" ) //removes FNV and adds Eternal and W2

console.log (favGames.length)  //Displays how many items in list now

console.log(favGames.indexOf("Witcher 3"), favGames.indexOf("Dark Souls")) // If i try to include the index of an object in the array that is not present it returns -1 in the console

console.log(favGames.includes("Elden Ring")) //This checks the array for a certain object, if said object is absent it logs false and vice versa

let TopThree = favGames.slice(0,3)

console.log(TopThree); //So this copies the array and pastes it but only within the range of one index to another
console.log (favGames) //Untouched

let likedGames = ["Stardew Valley", "Undertale", "Terraria"] // Bonus games i like but are NOT my favourite

let allLovedGames = favGames.concat(likedGames) //This concatenates the two arrays into an array about games i enjoy in general

console.log(allLovedGames.join(", "))// Prints all games i like and turns them into a string, need a double quote with a comma and space inside to be formatted properly
let numbos = [1,2,3,4,5]

console.log(numbos.reverse()) //What this does is that it reverses the index of the arrays

let indexTwo = numbos[1] // Index of the already reversed array in the none reversed array it would be 2

console.log(indexTwo); // But since the array is reversed it prints 4

console.log(numbos.sort()) // What this does is that it sorts the objects in an orderly manner therefore restoring their index to the original

console.log(allLovedGames.length)

let test = [1,2,3,4,5]
document.getElementById("output").innerHTML = `<h2 style = "Font-size:24px; font-weight:normal;padding:10px;">${favGames.join(", ")}</h2>`



