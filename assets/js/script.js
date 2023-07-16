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

  passwordLength = prompt('Pick between 8 and 128 characters!');
  if (passwordLength <= 7 || passwordLength >= 129) {
    return
  }

  console.log(passwordLength);

  alert("Your secure password is " + passwordLength + " Characters Long");
  confirmLowerCase = confirm ("Do you want lower case characters?");
  confirmUpperCase = confirm ("Do you want Upper case characters?");
  confirmNumbers = confirm ("Do you want Numbers?");
  confirmSpecialChars = confirm ("Do you want Special characters?");
  
  console.log(confirmLowerCase);
  console.log(confirmUpperCase);
  console.log(confirmNumbers);
  console.log(confirmSpecialChars);

if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChars === false) {
  return 'You Must Pick one!'
}

if (confirmLowerCase) {
    passWordGen = passWordGen.concat(toLowerCase);
}

if(confirmUpperCase) {
    passWordGen = passWordGen.concat(toUpperCase);
}

if(confirmNumbers) {
    passWordGen = passWordGen.concat(toNumbers);
}

if (confirmSpecialChars) {
    passWordGen = passWordGen.concat(toSpecialChars);
}


}


generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
