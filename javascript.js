function getComputerChoice() {
    let num = Math.random()
    let compChoice = null
    if (num > 0.66) {
        compChoice = "Rock"
    }
    else if (num < 0.33) {
        compChoice = "Scissors"
    }
    else {
        compChoice = "Paper"
    }

    console.log(compChoice)
}


getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()
getComputerChoice()