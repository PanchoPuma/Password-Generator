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

var generatePassword = function() {

  // Ask how many characters between 8 and 128
  var lenghtofPassword = window.prompt("How many characters do you want in your password?");
    var passwordLenght = validLenght (lenghtofPassword)
    if (passwordLenght) {
      console.log (passwordLenght) 

    // Ask if the user wants special Characters
    var specialCharacters = window.confirm("Do you want special characters in your password?");
    console.log (specialCharacters) 

    // Ask if the user wants numbers
    var includeNumbers = window.confirm("Do you want numbers in your password?");
    console.log (includeNumbers) 

    // Ask if the user wants upper case letters 
    var upperCase = window.confirm("Do you want upper case letters in your password?");
    console.log (upperCase) 

    // Ask if the user wants lower case letters 
    var LowerCase = window.confirm("Do you want lower case letters in your password?");
    console.log (LowerCase) 


    } else {
      console.log (passwordLenght) 
      return generatePassword ()
    }

  

  // function in case all is false 

};

//Conditions 

var validLenght = function (lenghtofPassword) {
  if (isNaN(lenghtofPassword)) {
    window.lert("Please enter a valid number!");
    return false;
  } else if (parseInt(lenghtofPassword) <= 7) {
    window.alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(lenghtofPassword) >= 129) {
    window.alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





