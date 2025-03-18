const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log(`Hello, ${name}, welcome to our game!`);

const shouldWePlay = prompt('Do you want to play? (yes/no) ').toLowerCase();

if (shouldWePlay === "yes") {
    let inventory = [];
    console.log("You find yourself at the entrance of a dark forest.");

    const firstChoice = prompt("Do you want to enter the forest or walk along its edge? (enter/edge) ").toLowerCase();

    if (firstChoice === "enter") {
        console.log("You venture into the forest and find a mysterious key on the ground.");
        inventory.push("mysterious key");

        const secondChoice = prompt("Do you want to pick up the key? (yes/no) ").toLowerCase();
        if (secondChoice === "yes") {
            console.log("You picked up the mysterious key.");
        } else {
            console.log("You left the key on the ground.");
            inventory.pop();
        }

        console.log("You encounter a locked chest.");
        if (inventory.includes("mysterious key")) {
            const thirdChoice = prompt("Do you want to use the key to open the chest? (yes/no) ").toLowerCase();
            if (thirdChoice === "yes") {
                console.log("You open the chest and find a treasure! You win!");
            } else {
                console.log("You decide to leave the chest unopened and walk away.");
            }
        } else {
            console.log("You don't have a key to open the chest. You lost :( You continue your journey next time.");
        }
    } else if (firstChoice === "edge") {
        console.log("You walk along the edge and find a rope.");
        inventory.push("rope");

        const secondChoice = prompt("Do you want to pick up the rope? (yes/no) ").toLowerCase();
        if (secondChoice === "yes") {
            console.log("You picked up the rope.");
        } else {
            console.log("You left the rope on the ground.");
            inventory.pop();
        }

        console.log("You encounter a wide river blocking your path.");
        if (inventory.includes("rope")) {
            const thirdChoice = prompt("Do you want to use the rope to swing across the river? (yes/no) ").toLowerCase();
            if (thirdChoice === "yes") {
                console.log("You skillfully swing across the river and continue your adventure. You win!");
            } else {
                console.log("You decide not to risk it and turn back. Game over.");
            }
        } else {
            console.log("Without a way to cross, you have to turn back. Game over.");
        }
    } else {
        console.log("Invalid input. Please restart the game and choose a valid option.");
    }
} else if (shouldWePlay === "no") {
    console.log("Okay, maybe next time.");
} else {
    console.log("Invalid input. Please restart the game and answer with 'yes' or 'no'.");
}
