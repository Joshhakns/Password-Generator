// Assignment code here

// used for generating random integer
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

function getCapitalLetter () {
 return getRandomInt (26) + 65
}

function getLowercase () {
  return getRandomInt (26) + 97
}

function getNumbers () {
  return getRandomInt (10) + 48 
}

function getSpecialCharacter () {
  var range = getRandomInt (4)
  getRandomInt (4)
  if (range == 0) {
    return getRandomInt(15)+33 
  }
  if (range == 1) {
    return getRandomInt(7)+58
  }
  if (range == 2) {
    return getRandomInt(6)+91
  }
  if (range == 3) {
    return getRandomInt(4)+123
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var capitals = [true, false]
var lowercase = [true, false]
var special = [true, false]
var passwordGenerated = undefined
var startAgain = false
// var stats = {
  //capitals : true,
  //lowercase : true,
  //special : true, 
  //length : true, 
//}

// Write password to the #password input
function writePassword(length) {
  var lengthOfPassword = prompt("How long do you want your password to be?")
  if (lengthOfPassword > 7 && lengthOfPassword < 129 ) {
    console.log(lengthOfPassword);
  } else {
    alert("Length of password must be between 8 and 128 characters!")
    return;
  }
  

// to do: Add error checking to make sure at least one of these is yes. 
// figure out how to store a variable length group of numbers. 
  var specialCharacters = confirm("Do you want to include special characters?")
  if (specialCharacters == true) {
    console.log(String.fromCharCode(getSpecialCharacter()))
  }
  
  

  var capitalLetters = confirm("Do you want to include capital letters?")
  if (capitalLetters == true) {
    console.log(String.fromCharCode(getCapitalLetter()))
  } else {

  }
  

  var lowercaseLetters = confirm ("Do you want to include lowercase letters?")
  if (lowercaseLetters == true) {
    console.log(String.fromCharCode(getLowercase()))
  }
  

  var includeNumbers = confirm ("Do you want to include numbers?")
  if (includeNumbers == true) {
    console.log(String.fromCharCode(getNumbers()))
  }
  
  document.getElementById("password").innerHTML="hi there"

  for (var i=0; i <= lengthOfPassword; i++)

  
  if (startAgain) {
    writePassword()
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
