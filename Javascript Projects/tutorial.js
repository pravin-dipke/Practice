const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "welcome to our game!")

const shouldWePlay = prompt('Do you want to play? ')


if (shouldWePlay.toLowerCase() === "yes") {
    // Game logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ")
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge? ")
        if (cross === "yes") {
            console.log("You cross the bridge was week and broke and you fell. You lost...")
        } else {
            console.log("Good choice... You win!!! ")
        }
    } else if (leftOrRight === "right") {
        console.log("You go right and fall off a cliff... ")
    } else {
        consloe.log("Invalid input!!! ")
    }





} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(")
} else {
    console.log("Invalid imput...")
}