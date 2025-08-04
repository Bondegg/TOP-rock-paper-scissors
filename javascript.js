//Initialize variables to monitor session score
let humanScore = 0
let computerScore = 0


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

    return humanChoice

    //.log for testing purposes, code can be commented out when not in use.
    //console.log(humanChoice)
}

function getComputerChoice() {
    //Variable declarations, num selects a random number from 0.0 -> 1.0
    let num = Math.random()
    let compChoice = null

    //Assign current;y null compChoice variable with a choice depending on the random numbern in num
    if (num > 0.66) {
        compChoice = "rock"
    }
    else if (num < 0.33) {
        compChoice = "scissors"
    }
    else {
        compChoice = "paper"
    }

    return compChoice

    //.log for testing purposes, code can be commented out when not in use.
    //console.log(compChoice)
}


function playRound(human, comp) {
    //All win conditions set under one if statement, increase human score and report back W/L to log
    if (human === "rock" && comp === "scissors" || human === "scissors" && comp === "paper" || human === "paper" && comp === "rock") {
        console.log("The computer chose " + comp + ", you win!")
        humanScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}.`)
    }
    
    //All loss conditions set under one else if statment, increase comp score and report back W/L to log
    else if (comp === "rock" && human === "scissors" || comp === "scissors" && human === "paper" || comp === "paper" && human === "rock") {
        console.log(`The computer chose ${comp}, you lose...`)
        computerScore++;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}.`)
    }

    //Only other outcomes are if it's a draw, in this case report the draw and post the W/L to log
    else {
        console.log(`The computer chose ${comp}, that's a draw.`)
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}.`)
    }
}

//Function call to play a single round
//playRound(getHumanChoice(), getComputerChoice())

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
}

playGame()