
//generate button
var generateBtn = document.querySelector("#generate");

//password variables
var passwordLength;
var passwordChar; 
var passwordNum;
var passwordLower;
var passwordUpper;

//arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomNumber = "0123456789";
var randomSymbol = "[ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~]";

//confirm length prompt
function generateNewPassword()
{
  //confirm criteria
  var validCriteria = false;
  while(!validCriteria)
  {
    confirmLower = confirm("Click OK to confirm including lowercase characters");
    confirmUpper = confirm("Click OK to confirm including uppercase characters");   
    confirmNum = confirm("Click OK to confirm including numeric characters");    
    confirmChar = confirm("Click OK to confirm including special characters");

    validCriteria = confirmChar || confirmNum ||  confirmLower || confirmUpper;

    if(!validCriteria)
      alert("Please select at least one option...");
  }

  // confirm length
  var howMany = prompt("How many characters would you like your password to contain? (8 - 128)");
  while (isNaN(howMany) || howMany < 8 || howMany > 128)
  {
      alert("Please enter a valid number.");
  }

  // create array of valid characters
  var validCharacterArray = "";

  if(confirmLower)
  {
    validCharacterArray += lowerCase;
  }
  if(confirmUpper)
  {
    validCharacterArray += upperCase;
  }
  if(confirmNum)
  {
    validCharacterArray += randomNumber;
  }
  if(confirmChar)
  {
    validCharacterArray += randomSymbol;
  }

  // creates the password
  // loop through number of characters in array to create the password
  var password = "";

  for(i = 0; i < howMany; i++)
  {
    var randomCharacter = validCharacterArray.charAt(Math.floor(Math.random() * validCharacterArray.length));
    password += randomCharacter;

  }

  // password appears in div
  var passwordText = document.querySelector("#password");  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generateNewPassword);