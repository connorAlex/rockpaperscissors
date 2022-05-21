//Rock Paper Scissors.


//Create computer input, from 0 to 2
function computerPlay(){
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

// Compare the two inputs against each other, determine winner
function playRound(playerSelection, computerSelection){
    
    let winner = "";
    console.log("player: " + playerSelection + "    computer: " + computerSelection);
    console.log(typeof(playerSelection));
    //player is rock
    if (playerSelection === 0){
        console.log("rock selected");
        switch (computerSelection){
            case 0:     //tie
                winner = "TIE";
                break;
            case 1:     //computer wins
                console.log("rock loses to paper");
                winner = "STEEL";
                break;
            case 2:     //player wins
                console.log("rock beats scissors");
                winner = "FLESH";
                break;
            default:
                break;
        }
    } 
    // Player is Paper
    else if (playerSelection === 1){
        switch (computerSelection){
            case 0:     //player wins
                winner = "FLESH";
                break;
            case 1:     //tie
                winner = "TIE";
                break;
            case 2:     //computer wins
                winner = "STEEL";
                break;
            
        }
    }
    //Player is Scissors
    else if (playerSelection === 2){
        switch (computerSelection){
            case 0:     //computer wins
                winner = "STEEL";
                break;
            
            case 1:     //player wins
                winner = "FLESH";
                break;
    
            case 2:     //tie
                winner = "TIE";
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
        event.stopPropagation();
        if (round <= 5){
            let compInp = computerPlay();
            
            let userInp = event.target.value;

            //make sure an choice box was selected.
            if (typeof(userInp) === 'undefined'){
                return 0;
            }
            //play round
            winner = playRound(Number(userInp), Number(compInp));

            document.querySelector('.round_results').innerHTML = `Round\n${round+1} Winner\n${winner}`;

            switch (compInp){
                case 0:
                    document.querySelector('#c_rock').style.backgroundColor = "#dd2020";
                    document.querySelector('#c_paper').style.backgroundColor = "white";
                    document.querySelector('#c_scissors').style.backgroundColor = "white";
                    break;
                case 1:
                    document.querySelector('#c_rock').style.backgroundColor = "white";
                    document.querySelector('#c_paper').style.backgroundColor = "#dd2020";
                    document.querySelector('#c_scissors').style.backgroundColor = "white";
                    break;
                case 2:
                    document.querySelector('#c_rock').style.backgroundColor = "white";
                    document.querySelector('#c_paper').style.backgroundColor = "white";
                    document.querySelector('#c_scissors').style.backgroundColor = "#dd2020";
                    break;
            }
            
            if (winner === "FLESH"){
                playerScore++;
                comp_health.removeChild(document.getElementById(`clife_${round}`));
    
            }
            else if (winner === "STEEL"){
                compScore++;
                player_health.removeChild(document.getElementById(`life_${round}`));
            }
            else{
                comp_health.removeChild(document.getElementById(`clife_${round}`));
                player_health.removeChild(document.getElementById(`life_${round}`));
            }
                
        
            if (round === 4){
                console.log(playerScore + " " + compScore);
                //print winner of the round
                if (playerScore > compScore){
                    console.log("Player Wins");
                    results.innerHTML = "FLESH CONQUERS "
                    return 0;
                }
                else if (compScore > playerScore){
                    console.log("Computer Wins");
                    results.innerHTML = "STEEL PREVAILS"
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