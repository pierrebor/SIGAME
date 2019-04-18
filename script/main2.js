
let colorTab = ["red", "blue", "green", "yellow"]
let up = document.querySelector(".up")
let down = document.querySelector(".down")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let subLvl = 0
let lvl = 1
let questionLvl1 =  Array ([], ["Droite","Gauche","Bas","Haut","CENTRE"], ["Gauche","Droite","haut","bas","pas gauche","CENTRE","pas droite","pas haut","pas bas"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"],["Vert","Bleu","Jaune","Violet","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"])
let timerSpeed = 300
let instruction = document.querySelector("#startButton")
let instructionList = document.querySelector(".instructionDiv")
let questionColor = false
let comptepoint = 1
let keyPressed = false;
let displayScore =document.querySelector(".scoreUnderGame")
let displayLvl =document.querySelector(".lvlUnderGame")


instruction = document.createElement("div")
instruction.style.width = "100%"
instruction.style.height = "10px"
instruction.style.backgroundColor ="white"
instruction.style.textAlign ="center"
instruction.style.font = "bold 40px Helvetica,serif"
document.querySelector(".txtInGame").appendChild(instruction)  // instruction written on main game 

instructionList = document.createElement("div")
instruction.style.height = "80%"
instruction.style.backgroundColor ="white"
instruction.style.textAlign ="center"
instruction.style.font = "bold 40px Helvetica,serif"
document.querySelector(".instructionDiv").appendChild(instructionList) // all of instruction per lvl


    //timer 
let repetition = 0
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#decompte").innerHTML = currentIndex // display time on right block
  document.querySelector(".txtInGameTime").innerHTML = currentIndex // display time on left block
  currentIndex--
    if (currentIndex <= 0){ 
            clearInterval(intervalId)
            let random = Math.floor(Math.random()*questionLvl1[lvl].length) // random question
            instructionList.innerHTML = questionLvl1[lvl]
            if(keyPressed){
                repetition++ 
                subLvl++ // sublvl increase
                keyPressed = false;
            }
            else{
                lvl = 1
                subLvl = 0
            }
            // console.log(timerSpeed)

            if(lvl == 1){
                console.log("start")
                instruction.style.color = "black" // the color of instruction came back black if you restart || loose
                right.style.backgroundColor = "red"
                left.style.backgroundColor = "blue"
                up.style.backgroundColor = "green"
                down.style.backgroundColor = "yellow"
            }

            else if(lvl > 2){ // for lvl 2

                
                let pickedColor = Math.floor(Math.random()*colorTab.length) // random color between 4 color
                instruction.style.color = colorTab[pickedColor] // instruction get random color 

                right.style.backgroundColor = colorTab[pickedColor] // pic one of the random color 
                colorTab.splice(pickedColor, 1) // remove last pick choosen by div
        
                pickedColor = Math.floor(Math.random()*colorTab.length)
                left.style.backgroundColor = colorTab[pickedColor]
                colorTab.splice(pickedColor, 1)
    
                pickedColor = Math.floor(Math.random()*colorTab.length)
                up.style.backgroundColor = colorTab[pickedColor] 
                colorTab.splice(pickedColor, 1)
            
                pickedColor = Math.floor(Math.random()*colorTab.length)
                down.style.backgroundColor = colorTab[pickedColor]
                colorTab.splice(pickedColor, 1)
                

                colorTab = ["red", "blue", "green", "yellow"] // update the list of color
                console.log("lvl 2")
            }
            
            instruction.innerHTML = questionLvl1[lvl][random]
            
            //lvl 1 question

            window.onkeyup = function(e) {
                let key = e.keyCode ? e.keyCode : e.which;
            
                switch(key){


                    case 32: // spacebar 
                    if(instruction.innerHTML == "CENTRE" || instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas droite" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas gauche"){
                        console.log("centre")
                        comptepoint++
                        keyPressed = true;
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0   
                    }
                        currentIndex = 0
                    break;
                    case 37: // left arrow 
                    if (instruction.innerHTML == "Gauche" || instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas droite" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas pas gauche"){
                        console.log("gauche work")
                        comptepoint++
                        keyPressed = true;
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0   
                    }
                        currentIndex = 0
                    break;
            
                    case 40: // down arrow
                    if (instruction.innerHTML == "Bas" || instruction.innerHTML == "pas gauche"  || instruction.innerHTML == "pas droite" ||instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas pas bas") {
                        console.log("bas work")
                        comptepoint++
                        keyPressed = true;
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0
                    }
                        currentIndex = 0
                    break;
                    
                    case 39: // right arrow
                    if (instruction.innerHTML == "Droite" || instruction.innerHTML == "pas gauche" ||instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas pas droite")  {
                        console.log("droite work")
                        comptepoint++
                        keyPressed = true;
                    }
                    else{
                        comptepoint--
                        lvl = 1
                        subLvl = 0
                        repetition = 0
                    }
                        currentIndex = 0
                    break;
            
                    case 38: // up arrow
                    if(instruction.innerHTML == "Haut" || instruction.innerHTML == 'pas gauche' || instruction.innerHTML == "pas droite"  || instruction.innerHTML == "pas bas"  ||instruction.innerHTML == "pas pas haut"){
                        console.log("haut work")
                        comptepoint++
                        keyPressed = true;
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
            displayScore.innerHTML = "score"+comptepoint
            currentIndex = 15
            document.querySelector(".lvl").innerHTML= "Niveau"+lvl+"." +subLvl
            displayLvl.innerHTML = "lvl"+subLvl

            if(questionColor){
                 //random colors 
            }
            if (repetition < 10*lvl){ //sublvl increase with the lvl for exemple lvl 1 has 10 subLvl and lvl 2 has 20 subLvl
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

    timerSpeed = 100 - 8*lvl // time increase for each lvl
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


