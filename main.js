//select elements from HTML file so we can use them in our JS
let mainElement = document.querySelector("#main");
let resultElement = document.querySelector("#result");
let graphElement = document.querySelector("#graph");

//create 3 buttons for rock paper and scissors and append to page

let rockButton = document.createElement("button");
rockButton.append("Rock");
let paperButton = document.createElement("button");
paperButton.append("Paper");
let scissorsButton = document.createElement("button");
scissorsButton.append("Scissors");

mainElement.append(rockButton, paperButton, scissorsButton);

//add event listeners to each button so that it runs the playGame function on click
rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);

//set up arrays for computer output and keeping track of number of times chosen
let computerOptions = ["Rock", "Paper", "Scissors"];
let resultCounts = [0, 0, 0];

//helper function to get a random choice for the computer.
function getRandomChoice() {
    let computerIndex = Math.floor(Math.random() * 3)
    //update resultCounts to track the choice made
    resultCounts[computerIndex] += 1;
    
    return computerOptions[computerIndex];
}

//helper function to display computer choice counts
function displayCounts(){
    graphElement.innerHTML = ""
    for (let index = 0; index < resultCounts.length; index += 1) {
        const result = resultCounts[index];
        let newDiv = document.createElement("div")
        newDiv.classList.add("countBox")
        newDiv.innerText = `The computer has chosen \n
        ${computerOptions[index]} \n
        ${result} \n
        times.`
        graphElement.append(newDiv)
    }
}

function playGame(event) {
    //reset output to display a new result each time.
    resultElement.innerHTML = "";

    let choice = event.target.innerText;
    let computerChoice = getRandomChoice();

    if (computerChoice === choice) {
        resultElement.append("it's a tie");
    }
    if (computerChoice === "Rock" && choice === "Scissors") {
        resultElement.append(
            "The computer chose 'Rock' and you chose 'Scissors'.  You lose."
        );
    }
    if (computerChoice === "Paper" && choice === "Rock") {
        resultElement.append(
            "The computer chose 'Paper' and you chose 'Rock'.  You lose."
        );
    }
    if (computerChoice === "Scissors" && choice === "Paper") {
        resultElement.append(
            "The computer chose 'Scissors' and you chose 'Paper'.  You lose"
        );
    }
    if (computerChoice === "Rock" && choice === "Paper") {
        resultElement.append(
            "The computer chose 'Rock' and you chose 'Paper'.  You win!"
        );
    }
    if (computerChoice === "Paper" && choice === "Scissors") {
        resultElement.append(
            "The computer chose 'Paper' and you chose 'Scissors'.  You win!"
        );
    }
    if (computerChoice === "Scissors" && choice === "Rock") {
        resultElement.append(
            "The computer chose 'Scissors' and you chose 'Rock'.  You win!"
        );
    }

    displayCounts()
}


