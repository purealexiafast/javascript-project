// Assignment code here

let length ="";
let number;
let special;
let upperCase;
let lowerCase;

//prompt to ask user how long they would like thier password to be

function generatePassword(){
  let length = (prompt("How long would you like your password to be? Please choose between 8 and 128 characters."));
   
//Loop if user chooses a number outside of the parameters

while(length <=7 || length >=129){
  alert("Please choose a password length between 8 and 128 characters.");
  let length = (prompt ("How long would you like your password to be?"));
}
}











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  return "Generated password will go here.";
}


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
  
  // .d After answering all prompts, at least one chracter type should be selected

  // 2) When all prompts are answered a password is generated that matches the selected criteria

  // 3) Password is displayed on the page
