let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // all divs
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // rock, paper,scissors
};

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game Was draw play again";
    msg.style.backgroundColor = "dodgerblue";
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";    }

}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice => modular
    const compChoice = genComputerChoice();
    console.log("computer Choice", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock")
            //scissors, paper
        userWin = compChoice === "paper" ?false:true;
        else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }

};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{        //event on all divs
        const userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked",userChoice);
        playGame(userChoice);

    });
});

