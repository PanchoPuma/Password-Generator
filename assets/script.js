// Assignment code here


//List of Arays for each case 

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%","&","(", ")", "*",
                          "+", ",", "-", ".", "/", ":", ";", "<", 
                          ">", "=", "?", "@", "[", "/", "]", "^", 
                          "_", "{", "}", "~",]; // based on the OWASP list of special characters
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L",
                          "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                          "p","q","r","s","t","u","v","w","x","y","z",];
var finalPassword = [];
var generatedpool = [];

//General Conditions 

// Password Lenght 
  var validLenght = function (lenghtofPassword) {
    if (isNaN(lenghtofPassword)) {
      window.lert("Please enter a valid number!");
      return false;
    } else if (parseInt(lenghtofPassword) >= 129) {
      window.alert("Password must be less than 129 characters.");
      return false;
    } else if (parseInt(lenghtofPassword) <= 7) {
      window.alert("Password length must be at least 8 characters.");
      return false;
    }
    return true;
  };


// Main Function

var generatePassword = function() {

  // Ask how many characters between 8 and 128
  var lenghtofPassword = window.prompt("How many characters do you want in your password?");
    var passwordLenght = validLenght (lenghtofPassword)
    if (passwordLenght) {
      console.log (passwordLenght) 

      // Ask if the user wants special Characters
      var specialCh = window.confirm("Do you want special characters in your password?");
      if (specialCh){
        generatedpool = generatedpool.concat(specialCharacters)
      }
      
      // Ask if the user wants numbers
      var numb = window.confirm("Do you want numbers in your password?");
      if (numb){
        generatedpool = generatedpool.concat(numbers)
      }

      // Ask if the user wants upper case letters 
      var upperL = window.confirm("Do you want upper case letters in your password?");
      if (upperL){
        generatedpool = generatedpool.concat(upperCaseLetters)
      }

      // Ask if the user wants lower case letters 
      var lowerL = window.confirm("Do you want lower case letters in your password?");
      if (lowerL){
        generatedpool = generatedpool.concat(lowerCaseLetters)
      }

      if (specialCh === false && numb === false && upperL === false && lowerL === false) {
        window.alert("You must choose at least ONE parameter for your password!")
        return generatePassword ();
      }
      console.log (generatedpool)

     
    // constructing new array based on parameters
    
    for (var i = 0; i < lenghtofPassword ; i++) {
       //randomness
      var randomness = Math.floor(Math.random () * generatedpool.length);
      console.log (randomness) 
      finalPassword.push (finalPassword[randomness]) 
    }  
    console.log (finalPassword)

    return finalPassword.join ("");

  } else {
      console.log (passwordLenght) 
      return generatePassword ();
    }
 
 
};






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

