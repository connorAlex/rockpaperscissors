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
    let compScore = 0;
    let playerScore = 0;
    
    // play 5 rounds
    for (i = 0; i < 5; i++){
        console.log(`ROUND ${i + 1}`);
        // init vars
        let compInp = computerPlay();
        let userInp = 0;
        let winner = "";
        const input = document.querySelector('.player_choice');

        input.addEventListener('click', event => {
            userInp = event.target.value;
            winner = playRound(userInp, compInp);
        });

        
        console.log(winner);
        if (winner === "player"){
            playerScore++;
        }
        else if (winner === "computer"){
            compScore++;
        }
            
    }

    //print winner of the round
    if (playerScore > compScore){
        console.log("Player Wins");
    }
    else if (compScore > playerScore){
        console.log("Computer Wins");
    }
    else{
        console.log("its a tie!!");
    }
}

