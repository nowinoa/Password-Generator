// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt(
    "Length must be between 10 and 64. Enter the desired length of the password:"
  );

  while (length < 10 || length > 64 || String) {
    length = prompt(
      "Sorry buddy, length must be between 10 and 64. Enter the desired length of the password:"
    );
  }
  const lowercase = confirm("Include lowercase characters in the password?");
  const uppercase = confirm("Include uppercase characters in the password?");
  const numeric = confirm("Include numeric characters in the password?");
  const special = confirm("Include special characters in the password?");

  while (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type. Please try again.");
    lowercase = confirm("Include lowercase characters in the password?");
    uppercase = confirm("Include uppercase characters in the password?");
    numeric = confirm("Include numeric characters in the password?");
    special = confirm("Include special characters in the password?");
  }
  return {
    length,
    lowercase,
    uppercase,
    numeric,
    special,
  };
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Function to generate password with user input
function generatePassword() {
  var password = "";
  var options = getPasswordOptions();
  if (options.lowercase) {
    password += getRandom(lowerCasedCharacters);
  }
  if (options.uppercase) {
    password += getRandom(upperCasedCharacters);
  }
  if (options.numeric) {
    password += getRandom(numericCharacters);
    console.log(password);
  }
  if (options.special) {
    password += getRandom(specialCharacters);
  }

  while (password.length < options.length) {
    if (options.lowercase) {
      password += getRandom(lowerCasedCharacters);
    }
    if (options.uppercase) {
      password += getRandom(upperCasedCharacters);
    }
    if (options.numeric) {
      password += getRandom(numericCharacters);
      console.log(password);
    }
    if (options.special) {
      password += getRandom(specialCharacters);
    }
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
