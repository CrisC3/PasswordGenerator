// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var fullpassword = "";
  
  var userInputLowerCase = "";
  var userInputUpperCase = "";
  var userInputNumeric = "";
  var userInputSpecial = "";
  
  var InLower = [];
  var InUpper = [];
  var InNumber = [];
  var InSpecial = [];

  var chosenLower = "";
  var chosenUpper = "";
  var chosenNumber = "";
  var chosenSpecial = "";
  
  var minLength = 8;
  var maxLength = 128;
  var passwordLength;

  while ((passwordLength < minLength) || (passwordLength > maxLength) || (isNaN(passwordLength))) {
    
    passwordLength = prompt("Please enter the require length of password to generate\nMin: 8\nMax: 128");
    
    if (passwordLength == null) {
      console.log("User click on cancel in the password length prompt.");
      console.log("Exited completely.");
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

  while ((userInputLowerCase == null) || (userInputLowerCase == "") || (userInputLowerCase == "undefined") || !(userInputLowerCase.match(/^[a-z]+$/))) {
    
    //var convertToLower = prompt("Enter all lowercase characters you wish to include in your password");
    userInputLowerCase = prompt("Enter all lowercase characters you wish to include in your password.\nNOTE: You need to include at least one lower case character.");
  
    if (userInputLowerCase == null) {
      console.log("User click on cancel in the lower case character(s) prompt.");
      console.log("Exited completely.");
      return;
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

  while ((userInputUpperCase == null) || (userInputUpperCase == "") || (userInputUpperCase == "undefined") || !(userInputUpperCase.match(/^[A-Z]+$/))) {
    
    userInputUpperCase = prompt("Enter all uppercase characters you wish to include in your password.\nNOTE: You need to include at least one upper case character.");
  
    if (userInputUpperCase == null) {
      console.log("User click on cancel in the upper case character(s) prompt.");
      console.log("Exited completely.");
      return;
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

  while ((userInputNumeric == null) || (userInputNumeric == "") || (userInputNumeric == "undefined") || !(userInputNumeric.match(/^[0-9]+$/))) {
    
    userInputNumeric = prompt("Enter all numbers you wish to include in your password.\nNOTE: You need to include at least one number.");
  
    if (userInputNumeric == null) {
      console.log("User click on cancel in the number(s) prompt.");
      console.log("Exited completely.");
      return;
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

  while ((userInputSpecial == null) || (userInputSpecial == "") || (userInputSpecial == "undefined") || !(userInputSpecial.match(/^[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+$/))) {
    
    userInputSpecial = prompt("Enter all special characters you wish to include in your password.\nNOTE: You need to include at least one special character.");
  
    if (userInputSpecial == null) {
      console.log("User click on cancel in the special character(s) prompt.");
      console.log("Exited completely.");
      return;
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

  InLower = userInputLowerCase.split("");
  InUpper = userInputUpperCase.split("");
  InNumber = userInputNumeric.split("");
  InSpecial = userInputSpecial.split("");
  
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

  return fullpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
