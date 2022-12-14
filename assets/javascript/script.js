generateBTN = document.getElementById(`generate`)
confirmBTN = document.getElementById(`confirm`)
numberLength = document.getElementById(`numberLength`)
var x;
lowerCase = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
upperCase = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
numeric = [0,1,2,3,4,5,6,7,8,9]
specialCharacter = [` `,`!`,`"`,`#`,`$`,`%`,`&`,`'`,`(`,`)`,`*`,`+`,`-`,`.`,`/`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`]`,`^`,`_`,`{`,`}`,`|`,`~`]
array = []
//for loop to add 8 - 128 on select
for (i=8; i <= 128; i++){
  option = document.createElement(`option`)
  option.value = i
  option.textContent = i
  numberLength.appendChild(option)
}

//show and hide functionality
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
//for loop for how many characters in the password
for (i=0; i<numberLength.value; i++){

}