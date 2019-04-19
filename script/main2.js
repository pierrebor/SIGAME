
let colorTab = ["#00b1c5", "#ff2176", "#e23db0", "#ffb200"]
let up = document.querySelector(".up")
let down = document.querySelector(".down")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let subLvl = 0
let lvl = 1
let questionLvl1 =  Array ([], ["Droite","Gauche","Bas","Haut","ESPACE !"], ["Gauche","Droite","Haut","Bas","ESPACE !","pas gauche","pas droite","pas haut","pas bas","pas espace"], ["Gauche","Droite","Haut","Bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"],["pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas","inverse de droite","inverse de gauche","inverse de haut","inverse de bas"])
let timerSpeed = 300
let instruction = document.querySelector("#startButton")
let instructionList = document.querySelector(".instructionDiv")
let questionColor = false
let score = 1
let keyPressed = false;
let displayScore =document.querySelector(".scoreUnderGame")
let displayLvl = document.querySelector(".lvlUnderGame")
let lastRequest = 0
let textInGame = document.querySelector(".txtInGame")

// class div{
//     constructor(width, heigth, color){
//         this.width = width;
//         this.heigth = heigth;
//     }
// }
// instructionClasses = new div(1000,30)
// instruction.style.width = instructionClasses.whidth
// instruction.style = instructionClasses.height

instruction = document.createElement("div")// instruction written on center of the game 
instruction.style.textAlign ="center"
instruction.style.font = "bold 40px Helvetica,serif"
document.querySelector(".txtInGame").appendChild(instruction)

instructionList = document.createElement("div") // all of instruction per lvl on your right side
instructionList.style.whidth = "300px"
instructionList.style.height = "450px"
instructionList.style.textAlign ="center"
instructionList.style.font = "bold 20px Helvetica,serif"
document.querySelector(".listInstruction").appendChild(instructionList) 


    //timer 
let repetition = 0 //initialize the loop
function decompte(){
  let intervalId =setInterval(function(){
    document.querySelector("#decompte").innerHTML = currentIndex // display time on right block
    document.querySelector(".txtInGameTime").innerHTML = +currentIndex // display time on left block
    currentIndex-- // time decrease to 0

    if (currentIndex <= 0){ 
        clearInterval(intervalId)
        let random = Math.floor(Math.random()*questionLvl1[lvl].length) // random question
        while(questionLvl1[lvl][random] == lastRequest){
            random = Math.floor(Math.random()*questionLvl1[lvl].length) // random question
        }
        instruction.innerHTML = questionLvl1[lvl][random]
        lastRequest = questionLvl1[lvl][random] // allows us never to hold the same instructions twice
        if(keyPressed){ // check if the player answer to instruction if not he lost point 
            repetition++ 
            subLvl++ // sublvl increase
            keyPressed = false;
        }
        else{ //"if not he lost point" 
            lvl = 1
            subLvl = 0
            score--
        }
        if(lvl == 1){ // initialize the color of color's button
            console.log("start")
            instruction.style.color = "black" // the color of instruction came back black if you restart || loose
            right.style.backgroundColor = "#ffb200"
            left.style.backgroundColor = "#ff2176"
            up.style.backgroundColor = "#00b1c5"
            down.style.backgroundColor = "#e23db0"
        }

        else if(lvl > 1){
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
            
            colorTab = ["#00b1c5", "#ff2176", "#e23db0", "#ffb200"] // update the list of color
        }
            
        instruction.innerHTML = questionLvl1[lvl][random] // display random instruction
        // instructionList.innerHTML = questionLvl1[lvl] 
        instructionList.innerHTML = "Exécuter la dernière instruction une fois  et re-cliquez sur Jouer a une reprise sinon .. gare a vous s"
        
        window.onkeyup = function(e){ // function to use key
            let key = e.keyCode ? e.keyCode : e.which;
            switch(key){
                
                case 32: // spacebar 
                if(instruction.innerHTML == "ESPACE !" || instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas droite" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas gauche"){
                    score++
                    keyPressed = true;
                }
                else{
                    score--
                    lvl = 1
                    subLvl = 0
                    repetition = 0   
                }
                    currentIndex = 0
                break;

                case 37: // left arrow 
                if (instruction.innerHTML == "Gauche" || instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas droite" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas pas gauche" || instruction.innerHTML == "pas espace" || instruction.innerHTML == "inverse de droite"){
                    score++
                    keyPressed = true;
                }
                else{
                    score--
                    lvl = 1
                    subLvl = 0
                    repetition = 0   
                }
                    currentIndex = 0
                break;
        
                case 40: // down arrow
                if (instruction.innerHTML == "Bas" || instruction.innerHTML == "pas gauche"  || instruction.innerHTML == "pas droite" ||instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas pas bas" || instruction.innerHTML == "pas espace" || instruction.innerHTML == "inverse de haut") {
                    score++
                    keyPressed = true;
                }
                else{
                    score--
                    lvl = 1
                    subLvl = 0
                    repetition = 0
                }
                    currentIndex = 0
                break;
                
                case 39: // right arrow
                if (instruction.innerHTML == "Droite" || instruction.innerHTML == "pas gauche" ||instruction.innerHTML == "pas haut" || instruction.innerHTML == "pas bas"  || instruction.innerHTML == "pas pas droite" || instruction.innerHTML == "pas espace" || instruction.innerHTML == "inverse de gauche")  {
                    score++
                    keyPressed = true;
                }
                else{
                    score--
                    lvl = 1
                    subLvl = 0
                    repetition = 0
                }
                    currentIndex = 0
                break;
        
                case 38: // up arrow
                if(instruction.innerHTML == "Haut" || instruction.innerHTML == 'pas gauche' || instruction.innerHTML == "pas droite"  || instruction.innerHTML == "pas bas"  ||instruction.innerHTML == "pas pas haut" || instruction.innerHTML == "pas espace" || instruction.innerHTML == "inverse de bas"){
                    score++
                    keyPressed = true;
                }
                else{
                    score--
                    lvl = 1
                    subLvl = 0
                    repetition = 0
                }
                    currentIndex = 0
                break;
            }
        }
        
        displayScore.innerHTML = score
        currentIndex = 20
        document.querySelector(".lvl").innerHTML= "Niveau"+lvl+"." +subLvl
        displayLvl.innerHTML = "sous-niveaux : "+subLvl

        if(questionColor){
                //random colors
                console.log(questionColor)
        }
        if (repetition < 10*lvl){ //sublvl increase with the lvl for exemple lvl 1 has 10 subLvl and lvl 2 has 20 subLvl
            // console.log(c) 
            decompte()
            instructionList.innerHTML = questionLvl1[lvl] // Instruction for each lvl
        }
        else{
            lvl++
            subLvl = 0
            repetition = 0
            console.log("c'est fini",lvl)
        }
    }
    timerSpeed = 90 - 4*lvl // time increase for each lvl
    // console.log(timerSpeed)
    lvlInCase.innerHTML = lvl+"."+ subLvl
    if(lvl >= 3){
        questionColor = true
    }
  }, timerSpeed)
}

document.querySelector("#launch").onclick = function() { // begin a game or lvl 
  	currentIndex = 5
    repetition = 0
      
decompte()
}
let lvlInCase = document.createElement("div")
document.querySelector(".lvlInCase").appendChild(lvlInCase)



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

// rightButton = new Button (100,100,"blue","absolute",185,199)
// right.style.whidth = rightButton.whidth
// right.style.backgroundColor = rightButton.color