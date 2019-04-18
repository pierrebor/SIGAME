let questionLvl1 =  Array ([], ["Droite","Gauche","Bas","Haut","Ne rien faire"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas"], ["Gauche","Droite","haut","bas","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"],["Vert","Bleu","Jaune","Violet","pas gauche","pas droite","pas haut","pas bas","pas pas gauche","pas pas droite","pas pas haut","pas pas bas"])


window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
 
    switch(key){

        case 37:
        if (random == "Gauche") {
            console.log("alleluia")
        }
        console.log(leftclick)
        break;

        case 40:
        if (random == "Bas"){
        console.log("bas work")
        break;
        }   
        case 39:
        if (random == "Droite") {
        console.log("droite work")
        }
        break;

        case 38:
        if(random == "Haut"){
        console.log(upclick)
        }
        break;
    }
}
