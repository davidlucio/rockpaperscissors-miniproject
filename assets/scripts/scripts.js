var rps = ["rock", "paper", "scissors"],
    scoreboard=[0,0,0], // [wins, losses, ties]
    gamecounter=0;

function initializegame(){

    let gamecountermessage = (gamecounter == 0) ? "Shall we play a game?" : "Want to play again?";

    if( confirm(gamecountermessage) ){
        gamecounter++;
        alert( playgame() );

        alert(`----- SCOREBOARD -----\n\n
Wins:   ${scoreboard[0]}\n
Losses: ${scoreboard[1]}\n
Ties:   ${scoreboard[2]}`);

        initializegame();
    }
    else{
        alert("Okay! Thanks for coming!");
        console.log("The only way to win is not to play.")
    }
    
}

function playgame(){

    let userChoice,
        validChoice = false,
        resultMessage="";
    
    /** Get user input, only if valid **/
    while(!validChoice){
        userChoice = prompt("Choose Rock (r), Paper (p), or Scissors (s)...").toLowerCase();
        switch(userChoice){
            case "rock":
            case "r":
                validChoice=true;
                userChoice=0;
                console.log("User chose rock");
                break;
            case "paper":
            case "p":
                validChoice=true;
                userChoice=1;
                console.log("User chose paper");
                break;
            case "scissors":
            case "s":
                validChoice=true;
                userChoice=2;
                console.log("User chose scissors");
                break;
            default:
                console.log("User is being a pain in the ass.");
                alert("Please play by the rules.");
                break;
        }
    }
    
    var compChoice = choicerandomizer();
    // console.log( `The computer chose ${rps[compChoice]}!` );

    if(compChoice==userChoice){
        resultMessage = `You both chose ${rps[compChoice]}!\n\nIt's a tie.`;
        scoreboard[2]++;
    }

    else if ( (userChoice==0 && compChoice==2) || (userChoice==1 && compChoice==0) || (userChoice==2 && compChoice==1) ){
        resultMessage = `You chose  ${rps[userChoice]}.\nThe computer chose ${rps[compChoice]}.\n\nYOU WIN!`;
        scoreboard[0]++;
    }

    else{
        resultMessage = `You chose  ${rps[userChoice]}.\nThe computer chose ${rps[compChoice]}.\n\nYou lose...`;
        scoreboard[1]++;
    }

    return resultMessage;
}

function choicerandomizer(){
    return Math.floor( Math.random() * 3 );
}

