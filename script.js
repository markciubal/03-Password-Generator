// Assignment Code
var uppercaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowercaseCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

function promptLength()  {
  var length = prompt("Enter the length of the desired password (between 8 and 128).");
  if (length >= 8 && length <= 128) {
    return length;
  } else {
    promptLength();
  }
}

function promptLowercase() {
  var useLowercase = window.confirm("Would you like to use lowercase letters?")
  return useLowercase;
}

function promptUppercase() {
  var useUppercase = window.confirm("Would you like to use uppercase letters?")
  return useUppercase;
}

function promptNumeric() {
  var useNumeric = window.confirm("Would you like to use numbers?")
  return useNumeric;
}

function promptSpecial() {
  var useSpecial = window.confirm("Would you like to use special characters?")
  return useSpecial;
}

function pickRandomElement(selection) {
  return selection[Math.floor(Math.random()*selection.length)];
}

function generatePassword(passwordLength) {
  var useCharacters = [];
  var generatedPassword = [];
  var useUppercase = promptUppercase();
  var useLowercase = promptLowercase();
  var useNumeric = promptNumeric();
  var useSpecial = promptSpecial();
  if (useUppercase) {
    useCharacters.push(...uppercaseCharacters);
  }
  if (useLowercase) {
    useCharacters.push(...lowercaseCharacters);
  }
  if (useNumeric) {
    useCharacters.push(...numberCharacters);
  }
  if (useSpecial) {
    useCharacters.push(...specialCharacters);
  }
  console.log(useCharacters);
  for (var i = 1; i <= passwordLength; i++){ 
    var randomCharacter = pickRandomElement(useCharacters);
    generatedPassword.push(...String(randomCharacter));
  }
  if (useUppercase) { 
    if (generatedPassword.some(r => uppercaseCharacters.indexOf(r) >= 0)) {
    } else {
      generatePassword(passwordLength);
    }
  }
  if (useLowercase) {
    if (generatedPassword.some(r => lowercaseCharacters.indexOf(r) >= 0)) {
    } else {
      generatePassword(passwordLength);
    }
  }
  if (useNumeric) {
    if (generatedPassword.some(r => numberCharacters.indexOf(r) >= 0)) {
    } else {
      generatePassword(passwordLength);
    }
  }
  if (useSpecial) {
    if (generatedPassword.some(r => specialCharacters.indexOf(r) >= 0)) {
    } else {
      generatePassword(passwordLength);
    }
  }
  return generatedPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var passwordLength = promptLength();
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
