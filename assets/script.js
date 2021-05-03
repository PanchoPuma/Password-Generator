// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here

//List of Arays for each case 

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%","&","(", ")", "*",
                        "+", ",", "-", ".", "/", ":", ";", "<", 
                        ">", "=", "?", "@", "[", "/", "]", "^", 
                        "_", "{", "}", "~", ]; // based on the OWASP list of special characters
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L",
                        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                        "p","q","r","s","t","u","v","w","x","y","z",];

// General Functions

function generatePassword() {

// Ask how many characters between 8 and 128
var lenghtofPassword = window.prompt("How many characters do you want in your password?");

// Ask if the user wants special Characters
var specialCharacters = window.prompt("Do you want special characters in your password?");

// Ask if the user wants numbers
var includeNumbers = window.prompt("Do you want numbers in your password?");

// Ask if the user wants upper case letters 
var upperCase = window.prompt("Do you want upper case letters in your password?");

// Ask if the user wants lower case letters 
var LowerCase = window.prompt("Do you want lower case letters in your password?");


// function in case all is false 

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





