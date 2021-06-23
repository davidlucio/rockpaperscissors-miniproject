var rps = ["rock", "paper", "scissors"];

function initializegame(){

    //Popup goes here

    // Choice resolution
    var compchoice = choicerandomizer();
    // console.log( `The computer chose ${rps[compchoice]}!` );

    //Result and reset
}

function choicerandomizer(){
    return Math.floor( Math.random() * 3 );
}

