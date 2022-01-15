// Assignment code here

var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?',];

// var confirmUpper;
// var confirmLower;
// var confirmNumbers;
// var confirmSpecial;
// var length;

var passwordOptions = function() {
  var length = parseInt(
  prompt("Choose a number between 8 and 128 for your password.")
  );
  if (length < 8) {
    alert("Your password must be atleast 8 characters!");
  }
  if (length > 128) {
    alert("Your password must be under 128 characters!");
  }

  confirmLower = confirm("Do you want lowercase characters in your password?");
  confirmUpper = confirm("Do you want uppercase characters in your password?");
  confirmSpecial = confirm("Do you want symbols in your password?");
  confirmNumbers = confirm("Do you want numbers in your password?");

    if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecial) {
    choices = alert("Please select atleast one of the options for your password.");
  }

  return [confirmLower, confirmUpper, confirmSpecial, confirmNumbers, length];

};

var generatePass = function() {
  var finalPassword = []
  console.log("hello");
  console.log(confirmLower);
  console.log(passwordOptions)
  if (confirmLower) {
    for (var i = 0; i < passwordOptions[4]; i++) {
      const element = lowerCaseChar[i];
      var randomLowerCase = lowerCaseChar[Math.floor(Math.random()* 26)]
      finalPassword.push(randomLowerCase);
      console.log(finalPassword)
    }
  }
  if (confirmUpper) {
    for (var i = 0; i < upperCaseChar.length; i++) {
      const element = upperCaseChar[i];
      var randomUpperCase = upperCaseChar[Math.floor(Math.random()* 26)]
    }
  }
  if (confirmSpecial) {
    for (var i = 0; i < specialChar.length; i++) {
      const element = specialChar[i];
      var randomSpecialChar = specialChar[Math.floor(Math.random()* 15)]
    }
  }
  if (confirmNumbers) {
    for (var i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      var randomNumber = numbers[Math.floor(Math.random()* 9)]
    }
  }
  

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var options = passwordOptions();
  console.log(options);
  generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = options;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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