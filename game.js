function getComputerChoice(){
   let random=(Math.random())
   if (random<=0.33) {
    return "rock"
   }
   else if (random>=0.33 && random<=0.66) {
    return "paper"
   }
   else return "scissors"
}


function getHumanChoice(){
   answer=prompt("rock,paper or scissors?")
   return answer.toLowerCase()
}

let human=getHumanChoice()
let computer=getComputerChoice()

let humanScore=0
let computerScore=0
/* All you need to do now to finish the single round section is add a scoring
system so computer wins they get a point, human wins they get a point. After
that just move onto making it 5 rounds*/
function playRound(humanChoice,computerChoice){
     if(humanChoice==="rock" && computerChoice==="paper"){
        return humanScore++, console.log("You lose! Paper beats Rock")
    } else if(humanChoice==="scissors" && computerChoice==="rock"){
        return console.log("You lose! Rock beats Scissors")
    } else if(humanChoice==="paper" && computerChoice==="scissors"){
        return console.log("You lose! scissors beats paper")
    } else if(humanChoice==="paper" && computerChoice==="rock"){
        return console.log("You win! Paper beats Rock")
    } else if(humanChoice==="rock" && computerChoice==="scissors"){
        return console.log("You win! Rock beats scissors")
    } else if(humanChoice==="scissors" && computerChoice==="paper"){
        return console.log("You win! Scissors beats Paper")}
     else return console.log("Draw!")
    }

function playGame
playRound(human,computer)