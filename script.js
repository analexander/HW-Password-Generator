
var generateBtn = document.querySelector("#generate");

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
  var howMany = prompt("How many characters would you like your password to contain? (8 - 128");

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

//user input

if (confirmChar == true) {
  passwordChar = true
}

if (confirmNum == true) {
  passwordNum = true
}

if (confirmLower == true) {
  passwordLower = true
}

if (confirmUpper == true) {
  passwordUpper = true
}

var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(passwordChar, passwordNum, passwordLower, passwordUpper, passwordLength) {
  
  var generatedPassword = " ";

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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/ 

// Write password to the #password input
function writePassword(lower, upper, number, symbol) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password)
  }
  passwordText.value = password;

}

return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);