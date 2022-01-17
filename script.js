// Assignment code here
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$','%','^','&','*','(',')','-','_','=','+','?',];

var passwordOptions = function () {
  var length = parseInt(
    prompt('Choose a number between 8 and 128 for your password.')
  );
  // if statements that will pass into if the length is less than 8 or greater than 128
  if (length < 8) {
    alert('Your password must be atleast 8 characters!');
    return;
  }
  if (length > 128) {
    alert('Your password must be under 128 characters!');
    return;
  }
  // window.confirms to store information 
  var confirmLower = confirm('Do you want lowercase characters in your password?');
  var confirmUpper = confirm('Do you want uppercase characters in your password?');
  var confirmSpecial = confirm('Do you want symbols in your password?');
  var confirmNumbers = confirm('Do you want numbers in your password?');

  // if statements that will pass into if none of the confirms were selected
  // then alerted to select atleast one of the options prior
  // then in the if statement, will return you back to the start of the function
  if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecial) {
    var choices = alert('Please select atleast one of the options for your password.');
    return;
  }
  // our stored information 
  return [confirmLower, confirmUpper, confirmSpecial, confirmNumbers, length];
};
  // function that generates our password using if statements and a for loop
var generatePass = function (options) {
  var userOptions = options;
  var finalPassword = []; // turns the variable into an array
  var result = ''; // turns the variable into a string 
  var randomLowerCase; // variable for our random lower case
  var randomUpperCase; // variable for our random upper case
  var randomSpecialChar; // variable for our random special character 
  var randomNumber; // variable for our random number 
  for (var i = 0; i < userOptions[4]; i++) {
    // check options true
    if (userOptions[0]) { 
      randomLowerCase = lowerCaseChar[Math.floor(Math.random() * 25)];
      finalPassword+=(randomLowerCase);
      // if confirmed for lowercase is chosen, then randomally choose a character from lowerCaseChar Array
      // then randomLowerCase/letter is += to finalPassword
    }

    if (userOptions[1]) {
      randomUpperCase = upperCaseChar[Math.floor(Math.random() * 25)];
      finalPassword+=(randomUpperCase);
      // if confirmed for uppercase is chosen, then randomally choose a character from upperCaseChar Array
      // then randomUpperCase/letter is += to finalPassword
    }

    if (userOptions[2]) {
      randomSpecialChar = specialChar[Math.floor(Math.random() * 14)];
      finalPassword+=(randomSpecialChar);
      // if confirmed for special character, then randomlly choose a character from specialChar Arry
      // then randomSpecialChar/symbol is += to finalPassword
    }

    if (userOptions[3]) {
      randomNumber = numbers[Math.floor(Math.random() * 8)];
      finalPassword+=(randomNumber);
      // if confired for a number, then randomally choose a number from numbers Array
      // then randomNumber is += to finalPassword
    }
  }
  // for loop that will loop through the length if statements, given the length they chose
  // userOptions[4] is calling for the length on line 34 and 8 
  for (var i = 0; i < userOptions[4]; i++) {
    var generatedPassword =
      finalPassword[Math.floor(Math.random() * finalPassword.length)];
    
    result += generatedPassword;
    // result being the last and final password that is then shown to the user
  }
  return result;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var options = passwordOptions();

  var password = generatePass(options);

  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//user is prompted for the amount of characters, uppercase, lowercase, special char, numbers
//store data inside of the console via objects?
//randomize and retrieve the data that was inputted
//the ability to push the data to the web page via queryselector?

// TODO:  if statement for which characters are needed
// TODO:  randomNumber for each character needed.
// TODO:  be sure to add the character to an empty string
// TODO:  How to loop through four different arrays in order to get a character from each character type
// TODO:  Be sure check your length for the password.
// TODO:  Be sure to randomize the password.
// TODO:  Return the password and add to the HTML page for display.