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


 let humanScore=0
 let computerScore=0


const final=document.querySelector(".final")
const results=document.querySelector(".results")

 function playRound(humanChoice,computerChoice){
    computerChoice=getComputerChoice()
     if(humanChoice==="rock" && computerChoice==="paper"){
        return computerScore++, results.textContent=`You lose! Paper beats Rock Score - You: ${humanScore} | Computer: ${computerScore}`, scoreCard()
    } else if(humanChoice==="scissors" && computerChoice==="rock"){
        return computerScore++,results.textContent=`You lose! Rock beats Scissors- You: ${humanScore} | Computer: ${computerScore}`, scoreCard()
    } else if(humanChoice==="paper" && computerChoice==="scissors"){
        return computerScore++,results.textContent=`You lose! scissors beats paper- You: ${humanScore} | Computer: ${computerScore}`, scoreCard()
    } else if(humanChoice==="paper" && computerChoice==="rock"){
        return humanScore++,results.textContent=`You win! Paper beats Rock-- You: ${humanScore} | Computer: ${computerScore}`, scoreCard()
    } else if(humanChoice==="rock" && computerChoice==="scissors"){
        return humanScore++,results.textContent=`You win! Rock beats scissors- You: ${humanScore} | Computer: ${computerScore}`, scoreCard()
    } else if(humanChoice==="scissors" && computerChoice==="paper"){
        return humanScore++,results.textContent=`You win! Scissors beats Paper- You: ${humanScore} | Computer: ${computerScore}`, scoreCard()}
     else return results.textContent=`Draw! - You: ${humanScore} | Computer: ${computerScore}`, scoreCard();
    }


const btns=document.querySelectorAll("button");

btns.forEach(btn=>btn.addEventListener("click", (event)=>{
    let target=event.target;

    switch (target.id) {
        case "rock":
            playRound(target.id);
            break;
        case "paper":
            playRound(target.id);
            break;
        case "scissors":
            playRound(target.id);
            break;
    }
}));

function scoreCard(){
      if (computerScore===5){
    final.textContent="Computer Wins the Game!"
    } else if (humanScore===5){
        final.textContent="You Win the Game!"
    }
}


//Let the player choose an option through 3 different buttons
//Each button calls back to the playRound function
//when the rock button is pressed the value of humanChoice is Rock
//when the paper button is pressed the value of humanChoice is Paper
//when the scissors button is pressed the value of humanChoice is scissors
//Display the results through a div
//Display the running score
//Once someone reaches 5 points announce a winner





