// Assignment Code
var generateBtn = document.querySelector("#generate");

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

// Write password to the #password input
function writePassword() {
  var password = generatePassword(10,true,false,false,false);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

function generatePassword(length,lower,upper,special,numbers){
  var totalRNG = 0;
  var characters = "";
  var password = "";


    if(length <= 128 && length >=8)
    {
      if(numbers === true)
      {
        characters += "0123456789";
        totalRNG += 10
      }
      if(upper === true)
      {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        totalRNG += 26
      }
      if(lower === true)
      {
        characters += "abcdefghijklmnopqrstuvwxyz"
        totalRNG += 26;
      }
      if(special === true)
      {
        characters += "!@#$%^&*"
        totalRNG += 8;
      }

      for(var i = 0; i < length; i++)
      {
        password += characters.charAt(Math.floor(Math.random() * totalRNG));
      }

      return password;
    }
}