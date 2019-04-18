let colorTab = ["#2ecc71", "#f1c40f", "#2980b9", "#8e44ad"]

let up = document.querySelector(".up")
let down = document.querySelector(".down")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let subLvl = 0
let questionLvl1 =  Array ([], ["Droite","Gauche","Bas","Haut","Ne rien faire"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"],["Vert","Bleu","Jaune","Violet","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"])
let lvl = 1
let timerSpeed = 300
let instruction = document.querySelector("#startButton")
let instructionList = document.querySelector(".instructionDiv")
let questionColor = false
let comptepoint = 1

instruction = document.createElement("div")
instruction.style.width = "100%"
instruction.style.height = "10px"
instruction.style.backgroundColor ="white"
instruction.style.textAlign ="center"
instruction.style.font = "bold 40px Helvetica,serif"
document.querySelector(".txtInGame").appendChild(instruction)

instructionList = document.createElement("div")
instruction.style.height = "80%"
instruction.style.backgroundColor ="white"
instruction.style.textAlign ="center"
instruction.style.font = "bold 40px Helvetica,serif"
document.querySelector(".instructionDiv").appendChild(instructionList)


    //timer 
let repetition = 0
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#decompte").innerHTML = currentIndex // affiche le temps dans le bloc de droite
  document.querySelector(".txtInGameTime").innerHTML = currentIndex // affiche le temps dans le bloc de gauche 
  currentIndex--
    if (currentIndex <= 0){ 
            clearInterval(intervalId)
            let random = Math.floor(Math.random()*questionLvl1[lvl].length) // random question
            instructionList.innerHTML = questionLvl1[lvl]
            
            repetition++ // nombre de sous niveau
            subLvl++ //  nombre de sous niveau
            // console.log(timerSpeed)

            if(lvl == 1){
                console.log("start")

            }else if(lvl == 2){

                
                // let pickedColor = Math.round(Math.random()*colorTab.length)
                // right.style.backgroundColor = colorTab[pickedColor]
                // colorTab.splice(1)
                // colorTab = ["red", "blue", "green", "yellow"]
                // pickedColor = Math.round(Math.random()*colorTab.length)
                // left.style.backgroundColor = colorTab[pickedColor]
                // colorTab.splice(2)
                // colorTab = ["red", "blue", "green", "yellow"]
                // pickedColor = Math.round(Math.random()*colorTab.length)
                // up.style.backgroundColor = colorTab[pickedColor] 
                // colorTab.splice(3)
                // colorTab = ["red", "blue", "green", "yellow"]
                // pickedColor = Math.round(Math.random()*colorTab.length)
                // down.style.backgroundColor = colorTab[pickedColor]
                // colorTab.splice(4)

                // colorTab = ["red", "blue", "green", "yellow"]
                // console.log("lvl 2")
            }
            
            instruction.innerHTML = questionLvl1[lvl][random]
            
            //lvl 1 question

            window.onkeyup = function(e) {
                var key = e.keyCode ? e.keyCode : e.which;
            
                switch(key){
            
                    case 37:
                    if (instruction.innerHTML == "Gauche"){
                        console.log("gauche work")
                        comptepoint++
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0   
                    }
                        currentIndex = 0
                    break;
            
                    case 40:
                    if (instruction.innerHTML == "Bas"){
                        console.log("bas work")
                        comptepoint++
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0
                    }
                        currentIndex = 0
                    break;
                    
                    case 39:
                    if (instruction.innerHTML == "Droite") {
                        console.log("droite work")
                        comptepoint++
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0
                    }
                        currentIndex = 0
                    break;
            
                    case 38:
                    if(instruction.innerHTML == "Haut"){
                        console.log("haut work")
                        comptepoint++
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0
                    }
                        currentIndex = 0
                    break;
                }
            }
            
            currentIndex = 15
            document.querySelector(".lvl").innerHTML= "Niveau"+lvl+"." +subLvl

            if(questionColor){
                let pickedColor = Math.round(Math.random()*colorTab.length)
                instruction.style.color = colorTab[pickedColor] //random colors 
            }
            if (repetition < 10*lvl){ //nombre de sublvl augmente avec le nombre de lvl
                // console.log(c) 
                decompte()
            }
            else{
                lvl++
                subLvl = 0
                repetition = 0
                console.log("c'est fini",lvl)
            }
    }

    timerSpeed = 100 - 8*lvl // temps décroit a chaque niveau
    // console.log(timerSpeed)
    lvlInCase.innerHTML = lvl
    if(lvl >= 3){
        questionColor = true
    }
    switch(lvl){
        case 2:
            // console.log("oui")
            break;
        case 3:
    }
  }, timerSpeed)
}



document.querySelector("#launch").onclick = function() { 
  	currentIndex = 5
      repetition = 0
      
      
    decompte()
}
let lvlInCase = document.createElement("div")
document.querySelector(".lvlInCase").appendChild(lvlInCase)


/*
class Saucisse{
    constructor(width, heigth, color, quality, cooking){
        this.width = width;
        this.heigth = heigth;
        this.color = color;
        this.quality = quality;
        this.cooking = cooking;
    }
}

*/
// class Button {
//     constructor(width,height,color,position,display,posX,posY){
//     this.width = width
//     this.height = height
//     this.color = color
//     this.position = position
//     this.display = display
//     this.posX = posX
//     this.posY = posY
//     }   
// }


