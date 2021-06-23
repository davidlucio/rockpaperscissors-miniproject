var rps = ["rock", "paper", "scissors"],
    scoreboard=[0,0,0],
    gamecounter=0;

function initializegame(){

    let gamecountermessage = (gamecounter == 0) ? "Shall we play a game?" : "Want to play again?";

    if( confirm(gamecountermessage) ){
        gamecounter++;
        playgame();
    }
    else{
        alert("Okay! Thanks for coming!");
        console.log("The only way to win is not to play.")
    }
}

function playgame(){

    let userChoice,
        validChoice = false;
    
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
}

function choicerandomizer(){
    return Math.floor( Math.random() * 3 );
}

