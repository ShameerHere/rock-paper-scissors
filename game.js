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
   let answer=prompt("rock,paper or scissors?")
   return answer.toLowerCase()
}

function playGame(){   
 let humanScore=0
 let computerScore=0
 playRound(getHumanChoice(), getComputerChoice())
 playRound(getHumanChoice(), getComputerChoice())
 playRound(getHumanChoice(), getComputerChoice())
 playRound(getHumanChoice(), getComputerChoice())
 playRound(getHumanChoice(), getComputerChoice())

if (computerScore>humanScore){
    console.log("Computer Wins the Game!")
    } else if (humanScore>computerScore){
        console.log("You Win the Game!")
    }else console.log ("Looks Like a Tie")
 function playRound(humanChoice,computerChoice){
     if(humanChoice==="rock" && computerChoice==="paper"){
        return computerScore++, console.log("You lose! Paper beats Rock")
    } else if(humanChoice==="scissors" && computerChoice==="rock"){
        return computerScore++,console.log("You lose! Rock beats Scissors")
    } else if(humanChoice==="paper" && computerChoice==="scissors"){
        return computerScore++,console.log("You lose! scissors beats paper")
    } else if(humanChoice==="paper" && computerChoice==="rock"){
        return humanScore++,console.log("You win! Paper beats Rock")
    } else if(humanChoice==="rock" && computerChoice==="scissors"){
        return humanScore++,console.log("You win! Rock beats scissors")
    } else if(humanChoice==="scissors" && computerChoice==="paper"){
        return humanScore++,console.log("You win! Scissors beats Paper")}
     else return console.log("Draw!");
    }
   

} 

playGame()

/*

Just pasting my pseudocode here because i did it in another doc:

2: A value from one of “rock”, “paper” or “scissors” is selected

rock and paper and scissors-create 3 variables

Then-create a function which chooses between them randomly

0-0.33333

3:

Allow the user to input one of the three options

prompt

5:

Take the human and computer players choices:

humanChoice is the answer in response to the function getHumanChoice

computerChoice is the result of the function getComputerChoice

allow humanChoice to be case-insensitive

so convert whatever the players said to lowercase

convert answer to lowercase

Play a round

make rock beat scissors, scissors beat paper, paper beat rock,

if same make it a draw

Increase the winner’s score

Announce a winner

```jsx
   return "You lose! Paper beats Rock"
    
    return "You lose! Rock beats Scissors"
    
    return "You lose! Scissors beats Paper"

    return "You win! Paper beats Rock"
    
    return "You win! Rock beats Scissors"
    
    return "You win! Scissors beats Paper"
    
```

Playing rock paper scissors-check

playing it 5 times-break it down what if i just wanted to play it twice-check

keeping track of the score-

when someone gets 5 declare a winner*/
