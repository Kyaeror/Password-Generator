generateBTN = document.getElementById(`generate`)
confirmBTN = document.getElementById(`confirm`)
numberLength = document.getElementById(`numberLength`)
lowerCase = document.getElementById(`lowerCase`)
upperCase = document.getElementById(`upperCase`)
numeric = document.getElementById(`numeric`)
specialCharacter = document.getElementById(`specialCharacter`)
password = document.getElementById(`password`)
//variable for boolean type funciton
var x;
//arrays for parameters
lowerCaseArray = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
upperCaseArray = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
numericArray = [0,1,2,3,4,5,6,7,8,9]
specialCharacterArray = [` `,`!`,`"`,`#`,`$`,`%`,`&`,`'`,`(`,`)`,`*`,`+`,`-`,`.`,`/`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`]`,`^`,`_`,`{`,`}`,`|`,`~`]
//generates 8 through 128 options on the select function
for (i=8; i <= 128; i++){
  option = document.createElement(`option`)
  option.value = i
  option.textContent = i
  numberLength.appendChild(option)
}

//show and hide criterias
function generateCriteria(){
  if(x==1){
    document.getElementById(`criteria`).style.display = `none`
    return x=0
  }else{
    document.getElementById(`criteria`).style.display = `inline`
    return x=1
  }
}
generateBTN.addEventListener(`click`, generateCriteria)
// generates password
function generatePassword(){
  array = []
  //reset it down to nothing before generating the password. fixed bug where it would append over and over
  password.innerHTML= ""
  //checks if the boxes are checked then combines arrays
  if(lowerCase.checked == true){
    array = array.concat(lowerCaseArray)
  }
  if(upperCase.checked == true){
    array = array.concat(upperCaseArray)
  }
  if(numeric.checked == true){
    array = array.concat(numericArray)
  }
  if(specialCharacter.checked == true){
    array = array.concat(specialCharacterArray)
  }
  //for loop for how many characters in the password
  for (i=0; i<numberLength.value; i++){
    randomNumber = Math.floor(Math.random() * array.length)
    //writes the random characters into the text
    password.append(array[randomNumber])
  }
}
confirmBTN.addEventListener(`click`, generatePassword)