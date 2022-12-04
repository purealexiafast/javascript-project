//Assignment Code Here:

//Prompt when user clicks the button.

  let length = (prompt("Enter how many characters you would like your password to be. Choose between 8 and 128 characters."));

  //Loop if user selects incorrect number.
  while(length < 8 || length > 128){
  length = (prompt("Password length must be between 8 and 128 characters, please try again."));
  }

  //Confirm which type of characters to use in password.
  let upperCase = confirm("Would you like to include uppercase letters in your password?");
  let lowerCase = confirm("Would you like to include lowercase letters in your password?");
  let number = confirm("Would you like to include numbers in your password?");
  let special = confirm("Would you like to include special characters in your password?");

  //Loop if user doesn't select any character types.
  while (!(upperCase || lowerCase || number || special)){
    alert("Please select at least one character type.");
    upperCase = confirm("Would you like to include uppercase letters in your password?");
    lowerCase = confirm("Would you like to include lowercase letters in your password?");
    number = confirm("Would you like to include numbers in your password?");
    special = confirm("Would you like to include special characters in your password?");
}

//Define Characters


  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCase ="abcdefghijklmnopqrstuvwxyz";
  number ="0123456789";
  special ="!@#$%^&*><+_-=";





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  // 1) User is presented with a series of prompts

  //  a. User selects which criteria to inlude in the password from the prompts

  // b. When prompted for the length of password, user selects 8 > 128 characteres

  // c. When prompted for character types, user selects lowercase, uppercase,numeric and/or special characters
  
  // .d After answering all prompts, at least one character type should be selected

  // 2) When all prompts are answered a password is generated that matches the selected criteria

  // 3) Password is displayed on the page
