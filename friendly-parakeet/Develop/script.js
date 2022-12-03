let length = (prompt("Enter how many characters you would like your password to be. Choose between 8 and 128 characters."));

while(length < 8 || length > 128){
length = (prompt("Password length must be between 8 and 128 characters, please try again."));
}

let upperCase = confirm("Would you like to include uppercase letters in your password?");
let lowerCase = confirm("Would you like to include lowercase letters in your password?");
let number = confirm("Would you like to include numbers in your password?");
let special = confirm("Would you like to include special characters in your password?");

while (!(upperCase || lowerCase || number || special)){
  alert("Please select at least one character type.");
  upperCase = confirm("Would you like to include uppercase letters in your password?");
  lowerCase = confirm("Would you like to include lowercase letters in your password?");
  number = confirm("Would you like to include numbers in your password?");
  special = confirm("Would you like to include special characters in your password?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let min = 8;
let max = 128;

function length (min, max){
  let arr = [];
  for (let i = min; i<= max; i++){
    arr.push(i);
  }
  return arr;
}

  const options ={
  passwordLength = length (min, max);
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCase ="abcdefghijklmnopqrstuvwxyz";
  numbers ="0123456789";
  symbols ="!@#$%^&*><+_-=";
  }

function generatePassword(length){
  let password=" ";
  const characters = options.length;
  for ( let i=0; i<length; i++){
    password += options.charAt(Math.floor(Math.random() * characters ));
  }

  return password;
}

console.log(generatePassword(length));


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
