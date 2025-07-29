function getHumanChoice() {
    //Ask the user for their input via a pop up box
    let humanChoice = prompt("Rock, Paper or Scissors? :")
    console.log(humanChoice)

    //Convert user input to lower case and update the variable with the relevant string
    if (humanChoice.toLowerCase() === "rock") {
        humanChoice = "rock"
    }
    else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = "paper"
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = "scissors"
    }
    else (
        //Additional else in case the user inputs something outside of the three options, this will be used in the match logic.
        humanChoice = null
    )

    //.log for testing purposes, code can be commented out when not in use.
    console.log(humanChoice)
}

function getComputerChoice() {
    //Variable declarations, num selects a random number from 0.0 -> 1.0
    let num = Math.random()
    let compChoice = null

    //Assign current;y null compChoice variable with a choice depending on the random numbern in num
    if (num > 0.66) {
        compChoice = "Rock"
    }
    else if (num < 0.33) {
        compChoice = "Scissors"
    }
    else {
        compChoice = "Paper"
    }

    //.log for testing purposes, code can be commented out when not in use.
    //console.log(compChoice)
}

getHumanChoice()