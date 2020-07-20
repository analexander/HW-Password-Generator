// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

 function userPassword(arr) {

  for (var i = 0; i < arr.length; i++) {
    [Math.floor(Math.random() * arr.length)];
    
  } alert(arr[i]);
}*/

/* var howMany = prompt("How many characters would you like your password to contain?");

var min = 8;
var max = 128;

var howMany = Math.floor(Math.random()*(max-min+1)+min);

console.log(howMany); */



/* for (var i = 0; i < 10; i++) {
  var userChoice = nums[Math.floor(Math.random() * nums.length)];

for (var i = 0; i < nums.length; i++) {
  [Math.floor(Math.random() * nums.length)];
  
}

if (howMany[i] < 8 && howMany[i] > 128) {
  confirm("Click OK to confirm including special characters");
}
*/

//variables
var confirmChar = confirm("Click OK to confirm using special charaters")
var confirmNum = confirm("Click OK to confirm including numeric characters")
var confirmLower = confirm("Click OK to confirm using lowercase characters")
var confirmUpper = confirm("Click OK to confirm using uppercase characters")

function userLength() {
  var howMany = prompt("How many characters would you like your password to contain?");

  if (isNaN(howMany) || howMany < 8 || howMany > 128)  {
    alert("Please enter a valid number.")
  }



var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";

  var confirmCount = (lower + upper + number + symbol)

  var confirmArray = [confirmChar, confirmNum, confirmLower, confirmUpper];
}

console.log(confirmArray);



// Random gen functions

function getRandomLower() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

console.log(getRandomLower());

function getRandomUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

console.log(getRandomUpper());

function getRandomNumber() {
  var randomNumber = "0123456789"
  return randomNumber[Math.floor(Math.random() * randomNumber.length)];
}

console.log(getRandomNumber());

function getRandomSymbol() {
  var randomSymbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
}

console.log(getRandomSymbol());

}