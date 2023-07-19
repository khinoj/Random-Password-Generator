// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {


  let toLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let toUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let toNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let toSpecialChars = ['!', '@', '#', '$', '%', '^', '*'];

  let passWordGen = [];
  passwordLength = '';
  finalPassword = '';

  passwordLength = prompt('Pick between 8 and 128 characters!');
  if (passwordLength <= 7 || passwordLength >= 129) {
    return
  }

  console.log(passwordLength);
  //ask the user if they want specific characters, number or special chars
  alert("Your secure password is " + passwordLength + " Characters Long");
  confirmLowerCase = confirm ("Do you want lower case characters?");
  confirmUpperCase = confirm ("Do you want Upper case characters?");
  confirmNumbers = confirm ("Do you want Numbers?");
  confirmSpecialChars = confirm ("Do you want Special characters?");
  
  console.log(confirmLowerCase);
  console.log(confirmUpperCase);
  console.log(confirmNumbers);
  console.log(confirmSpecialChars);

  // statement for if all false return to aler
if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChars === false) {
  return 'You Must Pick one!'
}

// if user picks confirmLowerCase blank array + toLowerCase array
if (confirmLowerCase) {
    passWordGen = passWordGen.concat(toLowerCase);
}

// if user picks confirmUpperCase blank array + toUpperCase array
if (confirmUpperCase) {
    passWordGen = passWordGen.concat(toUpperCase);
}

// if user picks confirmNumbers blank array + toNumbers array
if (confirmNumbers) {
    passWordGen = passWordGen.concat(toNumbers);
}

// if user picks confirmSpecialChars blank array + toSpecialChars array
if (confirmSpecialChars) {
    passWordGen = passWordGen.concat(toSpecialChars);
}

//for loop with passwordLength blank string ++ finalPassword blank string to a math section for adding characters. 
for (i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + passWordGen[Math.floor(Math.random() * [passWordGen.length])];  
}

console.log(finalPassword)
return(finalPassword);

}

// generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword();