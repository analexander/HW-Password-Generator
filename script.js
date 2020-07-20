
//password variables

var passwordLength = " ";
var passwordChar = false; 
var passwordNum = false;
var passwordLower = false;
var passwordUpper = false;

//arrays

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var randomNumber = ["0123456789"];
var randomSymbol = "[ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~]";

//confirm length prompt

function userLength() {
  var howMany = prompt("How many characters would you like your password to contain?");

while (isNaN(howMany) || howMany < 8 || howMany > 128)  {
    alert("Please enter a valid number.")
  }

//confirms

confirmChar = confirm("Click OK to confirm including special characters");
confirmNum = confirm("Click OK to confirm including numeric characters");    
confirmLower = confirm("Click OK to confirm including owercase characters");
confirmUpper = confirm("Click OK to confirm including uppercase characters");   

console.log(confirmChar);
console.log(confirmNum);
console.log(confirmLower);
console.log(confirmUpper);




var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword(
  confirmChar,
  confirmNum, 
  confirmLower,
  confirmUpper,
  howMany);
};

function generatePassword(confirmChar, confirmNum, confirmLower, confirmUpper, howMany) {
  
  var generatedPassword = "";

  var confirmCount = (lower + upper + number + symbol)

  var confirmArray = [{confirmChar}, {confirmNum}, {confirmLower}, {confirmUpper}];
}

console.log("confirmArray: ", confirmArray);

//Object of random gen functions

var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Random gen functions

function getRandomLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

console.log(getRandomLower());

function getRandomUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

console.log(getRandomUpper());

function getRandomNumber() {
  return randomNumber[Math.floor(Math.random() * randomNumber.length)];
}

console.log(getRandomNumber());

function getRandomSymbol() {
  return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
}

console.log(getRandomSymbol());

/*
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
