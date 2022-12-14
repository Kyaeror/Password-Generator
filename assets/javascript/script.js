generateBTN = document.getElementById(`generate`)
confirmBTN = document.getElementById(`confirm`)
numberLength = document.getElementById(`numberLength`)
var x;

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