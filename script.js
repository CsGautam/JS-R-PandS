function computerPlay() {
    let n=Math.floor(Math.random()*4);
    let compChoice;
    if (n==1) {
        compChoice ="rock";
    }
     else if (n==2) {
        compChoice ="paper";
    }
    else if (n==3) {
        compChoice ="scissors";
    }
    return compChoice;
}
function playerRound() {
    let oCome;
    let playerSelection;
    let computerSelection=computerPlay();
    if (playerSelection==computerSelection) {
        console.log(`It's a draw,you've both chosen ${computerselection}`);
        oCome=`It's a draw,you've both chosen ${computerselection}`;
    } else if (playerSelection=="rock" && computerSelection=="paper") {
    console.log("You Lose!Paper beats Rock");
    oCome="You Lose!Paper beats Rock";
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        console.log("You Win!Paper beats Rock");
        oCome="You Win!Paper beats Rock";
    }else if (playerSelection=="scissors" && computerSelection=="rock") {
        console.log("You Lose!Rock beats Scissors");
        oCome="You Lose!Rock beats Scissors";
    } else if (playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You Win!Rock beats Scissors");
        oCome="You Win!Rock beats Scissors";
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        console.log("You Lose!Scissors beats Paper");
        oCome="You Lose!Scissors beats Paper";
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You Win!Scissors beats paper");
        oCome="You Win!Scissors beats paper";
    }
}
