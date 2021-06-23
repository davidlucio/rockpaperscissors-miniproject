# rockpaperscissors-miniproject
Unit 03 Mini-Project: Rock, Paper, Scissors

## Pseudocode Breakdown

**Step 1)** Interface

create popup:
    -- Choose R / P / S
    -- Result
    -- Play Again?

**Step 2)** Randomizer

when (userchoice){
    computerchoice = random(r/p/s);

    compare(userchoice, computer choice);

    "playagain?"
}

**Step 3)**

compare (user, comp){
    
    if(comp==user){
        return "Tie"
    }

    else if ( (user==r && comp==s) || (user==p && comp==r) || (user==s && comp==p) ){
        return "user wins"
    }

    else{
        computer wins
    }
}