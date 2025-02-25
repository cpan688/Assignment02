/* The “Grade Assigner” Application - Usage: Use else if or switch statements
    1. Collect the a number between 1 and 100 from the user.
    2. Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
    3. If the score is between 60 and 69, write out “You received a D” into the console.
       If the score is between 70 and 79, write out “You received a C” into the console.
       If the score is between 80 and 89, write out “You received a B” into the console.
       If the score is between 90 and 100, write out “You received an A” into the console.
       If the score is less than 60, write out “You received an F” into the console.  */

       const prompt=require("prompt-sync")({sigint:true});
       let validInput = true;                                             // flag to check if the input is valid
       
       // ask user to enter the grade number
       let grade = prompt('Enter the grade (between 1 and 100): ');
       if (isNaN(grade) || (Number.isInteger(parseInt(grade)) == false)) {                                                  // check if the input is a number
           console.error('Please enter a valid integer number.');
           validInput = false;
       } else if (parseInt(grade) < 1 || parseInt(grade) > 100) {                                                  // check if the input is between 1 and 100
           console.error('Please enter a number between 1 and 100.');
           validInput = false;
       }
       
       if (validInput == false) {                                        // check if the input is valid
           console.error('You did not enter a valid grade - please try again.');
           process.exit(1);
       }
       
       // Assign a letter grade based on the input number
       if (parseInt(grade) >= 90) {                                        // check if the grade is an A
           console.log('You received an A.');
       } else if (parseInt(grade) >= 80) {                                 // check if the grade is a B
           console.log('You received a B.');
       } else if (parseInt(grade) >= 70) {                                 // check if the grade is a C
           console.log('You received a C.');
       } else if (parseInt(grade) >= 60) {                                 // check if the grade is a D
           console.log('You received a D.');
       } else {                                                            // the grade must be an F by here
           console.log('You received an F.');
       } ;
    