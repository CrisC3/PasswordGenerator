// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  // Stores the full password.
  var fullpassword = "";
  
  // Stores the inputs from the prompt
  var userInputLowerCase = "";
  var userInputUpperCase = "";
  var userInputNumeric = "";
  var userInputSpecial = "";
  
  // Stores the inputs from the prompts into arrays
  var InLower = [];
  var InUpper = [];
  var InNumber = [];
  var InSpecial = [];

  // Stores the chosen character from Lower, Upper, Number and Special characters
  var chosenLower = "";
  var chosenUpper = "";
  var chosenNumber = "";
  var chosenSpecial = "";
  
  // Sets the restrictions for password lengths, and actual password length
  var minLength = 8;
  var maxLength = 128;
  var passwordLength;

  // Get the user to enter a password length in between minLength and maxLength, and validates it
  while ((passwordLength < minLength) || (passwordLength > maxLength) || (isNaN(passwordLength))) {
    
    // Prompts the user for a password length
    passwordLength = prompt("Please enter the require length of password to generate\nMin: 8\nMax: 128");
    
    // Check on the prompt window, if the user click cancel, left it blank, is a number, did not enter the require length, or successfully enter a value
    if (passwordLength == null) {
      console.log("User click on cancel in the password length prompt.");
      console.log("Exited completely.");
      return "Click on Generate Password";
    }
    else if (passwordLength == "") {
      console.log("User did not entered a length");
    }
    else if (isNaN(passwordLength)) {
      console.log("User entered an invalid value: " + passwordLength);
    }
    else if (((passwordLength < minLength) || (passwordLength > maxLength))) {
      console.log("User chose an invalid password length of: " + passwordLength + "\n Min: " + minLength + "\t Max: " + maxLength);
    }
    else {
      console.log("User chose password length of: " + passwordLength);
    }
  }

  // Get the user to enter lower case characters and validates it
  while ((userInputLowerCase == null) || (userInputLowerCase == "") || (userInputLowerCase == "undefined") || !(userInputLowerCase.match(/^[a-z]+$/))) {
    
    // Prompts the user to enter lower case characters
    userInputLowerCase = prompt("Enter all lowercase characters you wish to include in your password.\nNOTE: You need to include at least one lower case character.");
  
    // Check on the prompt window, if the user click cancel, left it blank, is lower case, did not enter the require length, or successfully enter a value
    if (userInputLowerCase == null) {
      console.log("User click on cancel in the lower case character(s) prompt.");
      console.log("Exited completely.");
      return "Click on Generate Password";
    }
    else if (userInputLowerCase == "") {
      console.log("User did not entered any lower case character(s)");
    }
    else if (!(userInputLowerCase.match(/^[a-z]+$/))) {
      console.log("User entered invalid values: " + userInputLowerCase + "\nOnly lowercase character(s) allowed.");
    }
    else {
      console.log("User chose the lower case character(s): " + userInputLowerCase);
    }
  }

  // Get the user to enter upper case characters and validates it
  while ((userInputUpperCase == null) || (userInputUpperCase == "") || (userInputUpperCase == "undefined") || !(userInputUpperCase.match(/^[A-Z]+$/))) {
    
    // Prompts the user to enter upper case characters
    userInputUpperCase = prompt("Enter all uppercase characters you wish to include in your password.\nNOTE: You need to include at least one upper case character.");
  
    // Check on the prompt window, if the user click cancel, left it blank, is upper case, did not enter the require length, or successfully enter a value
    if (userInputUpperCase == null) {
      console.log("User click on cancel in the upper case character(s) prompt.");
      console.log("Exited completely.");
      return "Click on Generate Password";
    }
    else if (userInputUpperCase == "") {
      console.log("User did not entered any upper case character(s)");
    }
    else if (!(userInputUpperCase.match(/^[A-Z]+$/))) {
      console.log("User entered invalid values: " + userInputUpperCase + "\nOnly uppercase character(s) allowed.");
    }
    else {
      console.log("User chose the upper case character(s): " + userInputUpperCase);
    }
  }

  // Get user to enter numbers and validates it
  while ((userInputNumeric == null) || (userInputNumeric == "") || (userInputNumeric == "undefined") || !(userInputNumeric.match(/^[0-9]+$/))) {
    
    // Prompts the user to enter numbers
    userInputNumeric = prompt("Enter all numbers you wish to include in your password.\nNOTE: You need to include at least one number.");
  
    // Check on the prompt window, if the user click cancel, left it blank, is a number, did not enter the require length, or successfully enter a value
    if (userInputNumeric == null) {
      console.log("User click on cancel in the number(s) prompt.");
      console.log("Exited completely.");
      return "Click on Generate Password";
    }
    else if (userInputNumeric == "") {
      console.log("User did not entered any number.");
    }
    else if (!(userInputNumeric.match(/^[0-9]+$/))) {
      console.log("User entered invalid values: " + userInputNumeric + "\nOnly numbers(s) allowed.");
    }
    else {
      console.log("User chose the numbers(s): " + userInputNumeric);
    }
  }

  // Get user to enter special characters and validates it
  while ((userInputSpecial == null) || (userInputSpecial == "") || (userInputSpecial == "undefined") || !(userInputSpecial.match(/^[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+$/))) {
    
    // Prompts the user to enter special characters
    userInputSpecial = prompt("Enter all special characters you wish to include in your password.\nNOTE: You need to include at least one special character.");
  
    // Check on the prompt window, if the user click cancel, left it blank, is a special character, did not enter the require length, or successfully enter a value
    if (userInputSpecial == null) {
      console.log("User click on cancel in the special character(s) prompt.");
      console.log("Exited completely.");
      return "Click on Generate Password";
    }
    else if (userInputSpecial == "") {
      console.log("User did not entered any special character(s)");
    }
    else if (!(userInputSpecial.match(/^[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+$/))) {
      console.log("User entered invalid values: " + userInputSpecial + "\nOnly special character(s) allowed.");
    }
    else {
      console.log("User chose the special character(s): " + userInputSpecial);
    }
  }

  // Saving the user prompt inputs into arrays
  InLower = userInputLowerCase.split("");
  InUpper = userInputUpperCase.split("");
  InNumber = userInputNumeric.split("");
  InSpecial = userInputSpecial.split("");
  
  // Looping, to go thru the different categories (InLower, InUpper, InNumber, and InSpecial), then picking an index of each category until the password length is met
  for (var i = 0; i < passwordLength; i++) {
    
    var category = Math.floor(Math.random() * 4) + 1;
      console.log("Event: " + i + " Category generated: " + category);
      if (category == 1) {
        var randomPos = Math.floor(Math.random() * InLower.length);
        fullpassword += InLower[randomPos];
        console.log(InLower[randomPos]);
      }
      else if (category == 2) {
        var randomPos = Math.floor(Math.random() * InUpper.length);
        fullpassword += InUpper[randomPos];
        console.log(InUpper[randomPos]);
      }
      else if (category == 3) {
        var randomPos = Math.floor(Math.random() * InNumber.length);
        fullpassword += InNumber[randomPos];
        console.log(InNumber[randomPos]);
      }
      else if (category == 4) {
        var randomPos = Math.floor(Math.random() * InSpecial.length);
        fullpassword += InSpecial[randomPos];
        console.log(InSpecial[randomPos]);
      }
    }
    
    console.log(fullpassword);
    
    // Return the value of full password to the calling function
    return fullpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
