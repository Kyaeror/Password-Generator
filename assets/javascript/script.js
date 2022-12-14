generateBTN = document.getElementById(`generate`)
var x;
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
