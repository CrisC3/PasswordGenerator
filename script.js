// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var password = "";
  var userInputLowerCase = "";
  var userInputUpperCase = "";
  var userInputNumeric = "";
  var userInputSpecial = "";
  var minLength = 8;
  var maxLength = 128;
  var passwordLength;

  while ((passwordLength < minLength) || (passwordLength > maxLength) || (isNaN(passwordLength))) {
    
    passwordLength = prompt("Please enter the require length of password to generate\nMin: 8\nMax: 128");
    
    if (passwordLength == null) {
      console.log("User click on cancel in the password length prompt.");
      return;
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

  while (!(userInputLowerCase.match(/^[a-z]+$/)) || (userInputLowerCase == null) || (userInputLowerCase == "") || (userInputLowerCase == "undefined")) {
    
    //var convertToLower = prompt("Enter all lowercase characters you wish to include in your password");
    userInputLowerCase = prompt("Enter all lowercase characters you wish to include in your password");
  
    if (userInputLowerCase == null) {
      console.log("User click on cancel in the lower case character(s) prompt.");
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

  while (!(userInputUpperCase.match(/^[A-Z]+$/)) || (userInputUpperCase == null) || (userInputUpperCase == "") || (userInputUpperCase == "undefined")) {
    
    userInputUpperCase = prompt("Enter all uppercase characters you wish to include in your password");
  
    if (userInputUpperCase == null) {
      console.log("User click on cancel in the upper case character(s) prompt.");
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


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
