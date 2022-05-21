//Rock Paper Scissors.


//Create computer input, from 0 to 2
function computerPlay(){
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Compare the two inputs against each other, determine winner
function playRound(playerSelection, computerSelection){
    
    let winner = "";
    

    //player is rock
    if (playerSelection === 0){
        switch (computerSelection){
            case 0:     //tie
                winner = "tie";
                break;
            case 1:     //computer wins
                winner = "computer";
                break;
            case 2:     //player wins
                winner = "player";
                break;
        }
    } 
    // Player is Paper
    else if (playerSelection === 1){
        switch (computerSelection){
            case 0:     //player wins
                winner = "player";
                break;
            case 1:     //tie
                winner = "tie";
                break;
            case 2:     //computer wins
                winner = "computer";
                break;
        }
    }
    //Player is Scissors
    else{
        switch (computerSelection){
            case 0:     //computer wins
                winner = "computer";
                break;
            
            case 1:     //player wins
                winner = "player";
                break;
    
            case 2:     //tie
                winner = "tie";
                break;
        }
    }
    
    //return round winner
    return winner;
}


//create our main function
function game(){
    // init scores
    let round = 0;
    let compScore = 0;
    let playerScore = 0;
    
    let winner = "";
    let input = document.querySelector('.player_choice');
    let results = document.querySelector('.results');
    let player_health = document.querySelector('.player_lives');
    let comp_health = document.querySelector('.comp_lives');

    input.addEventListener('click', event => {
        if (round <= 5){
            let compInp = computerPlay();
            let userInp = event.target.value;
            winner = playRound(userInp, compInp);
            document.querySelector('.round_results').innerHTML = `Round ${round+1} Winner: ${winner}`;
            
            
            if (winner === "player"){
                playerScore++;
                comp_health.removeChild(document.getElementById(`clife_${round}`));
    
            }
            else if (winner === "computer"){
                compScore++;
                player_health.removeChild(document.getElementById(`life_${round}`));
            }
            else{
                comp_health.removeChild(document.getElementById(`clife_${round}`));
                player_health.removeChild(document.getElementById(`life_${round}`));
            }
                
        
            if (round === 4){
                //print winner of the round
                if (playerScore > compScore){
                    console.log("Player Wins");
                    results.innerHTML = "FLESH CONQUERS "
                    return 0;
                }
                else if (compScore > playerScore){
                    console.log("Computer Wins");
                    results.innerHTML = "COLD STEEL PREVAILS"
                    return 0;
                }
                else{
                    console.log("DRAW");
                    results.innerHTML = "DRAW";
                    return 0;
                }
            }
            round += 1;
        }
        
        
    });
    
    
   
}

game();