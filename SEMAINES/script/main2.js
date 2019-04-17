let up = document.querySelector(".up")
let down = document.querySelector(".down")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let subLvl = 0
let questionLvl1 =  Array ([], ["Droite","Gauche","Bas","Haut","Ne rien faire"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"],["Vert","Bleu","Jaune","Violet","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"])
let questionLvl2 = Array ("Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas")
let questionLvl3 = Array("Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas")
let lvl = 1
let timerSpeed = 300
let instruction = document.querySelector("#startButton")
let random1 = Math.floor(Math.random()*5)
let random2 = Math.floor(Math.random()*8)
let random3 = Math.floor(Math.random()*12)
let questionColor = false


let instructionStart = document.createElement("div")
    instructionStart.style.width = "100%"
    instructionStart.style.height = "10px"
    instructionStart.style.backgroundColor ="white"
    instructionStart.style.textAlign ="center"
    instructionStart.style.font = " bold 40px Helvetica,serif"
    document.querySelector(".txtInGame").appendChild(instructionStart)

    //timer 
let repetition = 0
function decompte(){
  let intervalId =setInterval(function(){
  document.querySelector("#decompte").innerHTML = currentIndex 
     currentIndex--
    if (currentIndex <= 0){
        clearInterval(intervalId)
        let random = Math.floor(Math.random()*questionLvl1[lvl].length)
        repetition++
        subLvl++
        // console.log(timerSpeed)

        if(lvl == 1){
            console.log("start")
        }else if(lvl == 2){
            rightButton = new Button (100,100,"blue","absolute",185,199)
            right.style.backgroundColor = rightButton.color //question de niveau 2
            console.log("lvl 2")
        }else{
            leftButton = new Button (100,100,"red","absolute",185,199)
            left.style.backgroundColor = leftButton.color;
            console.log("lvl 3")
        } 
        
        instructionStart.innerHTML = questionLvl1[lvl][random] //question de niveau 1
        
        currentIndex = 5
        document.querySelector(".lvl").innerHTML= "Niveau"+lvl+"." +subLvl

        if(questionColor){
            instructionStart.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16) // affichage de couleur aléatoire
        }
        if (repetition < 10){
            // console.log(c) 
            decompte()
        }
        else{
            lvl++
            subLvl = 0
            repetition = 0
            console.log("c'est finis",lvl)
        }
    }

    timerSpeed = 300 - 8*lvl // temps décroit a chaque niveau
    // console.log(timerSpeed)
    lvlInCase.innerHTML = lvl
    if(lvl >= 3){
        questionColor = true
    }
    switch(lvl){
        case 2:
            console.log("oui")
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
lvlInCase.style.width = "100%"
lvlInCase.style.height = "100%"
lvlInCase.style.textAlign ="center"
lvlInCase.style.font = " bold 40px Helvetica,serif"
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
class Button {
    constructor(width,height,color,position,display,posX,posY){
    this.width = width
    this.height = height
    this.color = color
    this.position = position
    this.display = display
    this.posX = posX
    this.posY = posY
    }   
}
// leftButton = new Button (100,100,"red","absolute",185,199)
// left.style.backgroundColor = leftButton.color;

// rightButton = new Button (100,100,"blue","absolute",185,199)
// right.style.backgroundColor = rightButton.color
