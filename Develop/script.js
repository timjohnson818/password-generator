// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var checker = 0;
  var length;
  while(checker==0){
    length = prompt("Enter the number of characters in the password", "Between 8-128");
    if(length >= 8 && length <= 128)
    {
      checker = 1;
    }
    else if(length === null)
    {
      return;
    }
    else
    alert("That is not a valid input");
  }
  
  checker = 0;
  var lower;
  while(checker == 0)
  {
    lower = prompt("Would you like to include lower case letters? (Y/N)");
    if(lower === "y" || lower === "n" ||lower === "Y" ||lower === "N")
    {
      checker = 1;
    }
    else if(lower === null)
    {
      return;
    }
    else
    alert("That is an invalid input.");
  }

  checker = 0;
  var upper;
  while(checker == 0)
  {
    upper = prompt("Would you like to include upper case letters? (Y/N)");
    if(upper === "y" || upper === "n" || upper === "Y" || upper === "N" )
    {
      checker = 1;
    }
    else if(upper === null)
    {
      return;
    }
    alert("That is an invalid input");
  }

  checker = 0;
  var numbers;
  while(checker == 0)
  {
    numbers = prompt("Would you like to include numbers? (Y/N)?");
    if(numbers === "y" || numbers === "n" || numbers === "Y" || numbers === "N")
    {
      checker = 1;
    }
    else if(numbers === null)
    {
      return;
    }
    else
    alert("That is an invalid input");
  }

  checker = 0;
  var special;
  while(checker == 0)
  {
    special = prompt("Would you like to include special characters? (Y/N)");
    if(special === "y" || special === "Y" || special === "n" || special  === "N")
    {
      checker = 1;
    }
    else if(speciall === null)
    {
      return;
    }
    alert("That is an invalid input");
  }
  
  if(lower == "n" || lower == "N" && special === "n" || special  === "N" && numbers === "n" || numbers === "N" && upper === "n" || upper === "N")
  {
    alert("You must select at least one type of character to generate a password.\nPress the button to try again.")
  }



  var password = generatePassword(length,lower,upper,numbers,special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length,lower,upper,numbers,special){
  var totalRNG = 0;
  var characters = "";
  var password = "";


    if(length <= 128 && length >=8)
    {
      if(numbers == "y" || numbers == "Y")
      {
        characters += "0123456789";
        totalRNG += 10
      }
      if(upper == "y" || upper == "Y")
      {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        totalRNG += 26
      }
      if(lower == "y" || lower == "Y")
      {
        characters += "abcdefghijklmnopqrstuvwxyz"
        totalRNG += 26;
      }
      if(special == "y" || special == "Y")
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