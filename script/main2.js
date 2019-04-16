let up = document.querySelector("#upClick")
let down = document.querySelector("#downClick")
let left = document.querySelector("#leftClick")
let right = document.querySelector("#rightClick")
let c = 0
let questionlvl1 =  Array ("Droite","Gauche","Bas","Haut","Ne rien faire")  
let timerSpeed = 100;

let instruction = document.querySelector("#startButton")
let random = Math.floor(Math.random()*5)


let instructionStart = document.createElement("div")
    instructionStart.style.width = "100%"
    instructionStart.style.height = "150px"
    instructionStart.style.backgroundColor ="white"
    instructionStart.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    instructionStart.style.textAlign ="center"
    instructionStart.innerHTML = questionlvl1[random]
    instructionStart.style.font = " bold 25px Helvetica,serif"
    document.querySelector(".txtInGame").appendChild(instructionStart);

let repetition = 0
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#decompte").innerHTML = currentIndex
     currentIndex--
    if (currentIndex < 0){

      clearInterval(intervalId);
      let random = Math.floor(Math.random()*5)
      repetition++
      c++
      instructionStart.innerHTML = questionlvl1[random]
      console.log(questionlvl1[random])
      currentIndex = 15
      document.querySelector(".lvl").innerHTML= "Niveau 1."+ c
      if (repetition < 10){
          console.log(c) 
        decompte()
       }else{
        repetition = 0
       }
    }
  }, timerSpeed)
}

document.querySelector("#launch").onclick = function() { 
  	currentIndex = 15;
      repetition = 0
      
    decompte(); 

    

}