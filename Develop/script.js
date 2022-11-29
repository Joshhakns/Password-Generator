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

// Setting all the variables 
var capitals = [true, false]
var lowercase = [true, false]
var special = [true, false]
var numbers = [true, false]
var passwordGenerated = ''
var startAgain = false
var general = [0, 1, 2, 3]


// Write password to the #password input
// Allows user to input how long they want their password to be. If select numbers outside range then get a prompt that says "must be between 8 and 128"
function writePassword(length) {
  var lengthOfPassword = prompt("How long do you want your password to be?")
  if (lengthOfPassword < 8 && lengthOfPassword > 128 ) {
    alert("Length of password must be between 8 and 128 characters!")
    return;
  } 
  

 // Add the pop up windows which allows the user to select if they want certain characters in their generated password. 
  var specialCharacters = confirm("Do you want to include special characters?")
  
  var capitalLetters = confirm("Do you want to include capital letters?")
 
  var lowercaseLetters = confirm ("Do you want to include lowercase letters?")

  var includeNumbers = confirm ("Do you want to include numbers?")

  
 // Set restart equal to true as default so the loop keeps going until a number is found that matches what is selected by user. Then moves on to the next itteration until length of password selected is met. 
  var restart = true ;
  var stored = "";
  if (includeNumbers === false && lowercaseLetters === false && capitalLetters === false && specialCharacters === false) {
    alert ("Need to select at least 1!")
    return ;
  }


  for (i = 0; i < lengthOfPassword; i++ ) {
   restart = true ; 
while (restart == true) { 
    //This is the code that I need to run repeatedly. Generate one of the four numbers however many times. Generation needs to be inside of for loop. 
    // set restart to false when selector is found variable is found to be true. so loop would stop. 
    var selector = getRandomInt(4) 
    if (selector === 0) {
      if (lowercaseLetters === true) {
        stored = stored + String.fromCharCode(getLowercase())
        restart = false;
      }
    }
    
    else if (selector === 1) {
      if (capitalLetters === true) {
        stored = stored + String.fromCharCode(getCapitalLetter())
        restart = false;
      }
    }

    else if (selector === 2) { 
      if (specialCharacters === true) {
        stored = stored + String.fromCharCode(getSpecialCharacter())
        restart = false;
      }
    }

    else if (selector === 3) {
      if (includeNumbers === true) {
        stored = stored + String.fromCharCode(getNumbers())
        restart = false; 
      }
    }

    else {
      alert ("Must select one!") ; 
      return ; 
    }
  }
  // checking to see if stored is the correct generated password. 
  console.log(stored)
  }
  document.getElementById("password").innerHTML=stored



  if (startAgain) {
    writePassword()
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
