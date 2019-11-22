//footer
function mois() {
    var textMois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
    var mois = Number(prompt("entrez un chiffre entre 1 et 12"));
    var mess;
    var tabMoiImper = [4, 6, 9, 11];
    var tabMoiPair = [1, 3, 5, 7, 8, 10, 12];
    if (tabMoiImper.indexOf(mois) > -1) {
        mess = ("le mois de " + textMois[mois - 1] + " à 30 jours");
    } else if (tabMoiPair.indexOf(mois) > -1) {
        mess = ("le mois de " + textMois[mois - 1] + " à 31 jours");
    } else if (mois === 2) {
        mess = ("le mois de " + textMois[mois - 1] + " à 28 jours");
    }
    alert(mess);
}

//text deroulant au tout debut
function changeColor(newColor) {
    var elem = document.getElementById('text_tout_debut');
    if (elem.style.color === newColor) {
        elem.style.color = "black";
    } else {
        elem.style.color = newColor;
    }
}


var boutonElt = document.getElementById("bouton");

boutonElt.addEventListener("mouseenter", function () {
    this.style.color = 'red';
});

boutonElt.addEventListener("mouseout", function () {
    this.style.color = 'black';
});



var cycleEnCours = false;
var interval;
var tabimage = ["un.jpg", "deux.jpg", "trois.jpg","proxy_centrale.jpg"];
var numImage=0;
function imagechange() {
    var x = document.getElementById("proxy");
    var v = x.getAttribute("src");
    if (numImage == tabimage.length) {
        clearInterval(interval);
        cycleEnCours = false;
        numImage=0;
        return;
    }
    v = tabimage[numImage++];
    x.setAttribute("src", "images_au_tous_debut/" + v);
    
}

var proxyElt = document.getElementById("proxy");
if(proxyElt){
    proxyElt.addEventListener("mouseenter", function (){ 
        if(cycleEnCours == false){    
            cycleEnCours = true;
            interval = setInterval(imagechange,2000);
        }
    });
}