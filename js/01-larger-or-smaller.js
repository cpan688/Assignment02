/* Larger or Smaller? Usage: Use simple conditional statements
    Create an application that accepts two integers within two separate prompts. Then, display only the larger of
    the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

const prompt=require("prompt-sync")({sigint:true});
let validInput = true;                                             // flag to check if the input is valid

// ask user to enter the first integer number
let num1 = prompt('Enter the first integer number: ');
if (isNaN(num1) || (Number.isInteger(parseInt(num1)) == false)) {                                                  // check if the input is a number
    console.error('Please enter a valid integer number.');
    validInput = false;
}

// ask user to enter the second integer number
let num2 = prompt('Enter the second integer number: ');
if (isNaN(num2) || (Number.isInteger(parseInt(num2)) == false)) {                                                  // check if the input is a number
    console.error('Please enter a valid integer number.');
    validInput = false;
}

if (validInput == false) {                                        // check if the input is valid
    console.error('You did not enter valid integer numbers - please try again.');
    process.exit(1);
}

// Compare the two input numbers, check if they are equal, and display the larger number
if (parseInt(num1) == parseInt(num2)) {                             // compare if two numbers are equal
    console.log('These two numbers are equal.');
    // document.write('These two numbers are equal.');
} else if (parseInt(num1) > parseInt(num2)) {                       // compare if first numbers are larger
    console.log('The first number ' + num1 + ' is larger.');
    // document.write('The first number ' + num1 + ' is larger.');
} else {                                                            // the second number must be larger by here
    console.log('The second number ' + num2 + ' is larger.');
    // document.write('The second number ' + num2 + ' is larger.');
} ;
