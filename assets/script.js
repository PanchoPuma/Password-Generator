// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

// Functions for every case 

function generatePassword() {

// Ask how many characters between 8 and 128

var askNumberOfCharacters = function () {
  var numberOfCharacters = window.prompt("How many characters do you want your password to contain?");
  if (isNaN(numberOfCharacters)) {
    window.alert("Please enter a valid number!");
    return askNumberOfCharacters ()
  } else {
  console.log (numberOfCharacters)
  }
};

// Ask if the user wants special Characters
// Ask if the user wants numbers
// Ask if the user wants upper case letters 
// Ask if the user wants lower case letters 
// function in case all is false 

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


