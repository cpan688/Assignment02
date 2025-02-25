/* The "Coin Flip" Game - use nested conditional statements
    1. set variable coinFlip to a random number
    2. ask the user to pick "Heads" or "Tails" and set variable choice to the user's input - validate user's input
    3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If
    it’s greater than a certain number, it will be tails.
    4. If the result is heads and the user selects heads, display the following message within an alert:
    The flip was heads and you chose heads...you win!
    5. If the result is heads and the user selects tails, display the following message within an alert:
    The flip was heads but you chose tails...you lose!
    6. If the result is tails and the user selects heads, display the following message within an alert:
    The flip was tails but you chose heads...you lose!
    7. If the result is tails and the user selects tails, display the following message within an alert:
    The flip was tails and you chose tails...you win!  */

    const prompt=require("prompt-sync")({sigint:true});
    let validInput = true;                                            // flag to check if the input is valid
    
    let coinFlip = Math.random();                                     // generate a random number between 0 and 1
    console.log('The coin flip is: ' + coinFlip);                     // display the result of the coin flip - this is for testing only
    if (coinFlip > 0.5) {                                             // check if the coin flip is heads (anything greater than 0.5 is head, set coinFlip to 1)
        coinFlip = 1;
    } else {                                                          // the coin flip must be tails
        coinFlip = 0;
    };
    
    // ask user to pick "Heads" or "Tails"
    let choice = (prompt('Please enter "H"(Heads) or "T"(Tails): ')).toUpperCase();  // ask the user to pick "Heads" or "Tails" and convert the input to uppercase  
    if ((choice != 'H') && (choice != 'T')) {                             // check if the input is valid
        console.error('Please enter a valid choice.');
        validInput = false;
    } 
    
    if (validInput == false) {                                        // check if the input is valid
        console.error('You did not enter a valid choice - please try again.');
        process.exit(1);
    }
    
    // check the result of the coin flip and display the result (random number is rounded to 0 or 1)
    if (coinFlip == 1) {                              // check if the coin flip is heads
        if (choice == 'H') {                                           // check if the user selected heads
            console.log('The flip was heads and you chose heads...you win!');
        } else {                                                      // the user must have selected tails
            console.log('The flip was heads but you chose tails...you lose!');
        }
    } else {                                                      // the coin flip must be tails
        if (choice == 'H') {                                           // check if the user selected heads
            console.log('The flip was tails but you chose heads...you lose!');
        } else {                                                      // the user must have selected tails
            console.log('The flip was tails and you chose tails...you win!');
        }
    } ;
    
    
    
    