var heures = Number(prompt("donner une heure : "));

if ((heures >= 2) && (heures <= 24)) {
    hAuPluriel = true;
    var message = "à la prochaine seconde il sera : " + heures + " heures";
} else if (heures <= 1) {
    hAuPluriel = false;
    var message = "à la prochaine seconde il sera : " + heures + " heure";
} else  
    var message = "les heures ne sont pas valides,";




var minutes = Number(prompt("donner les minutes : "));

if ((minutes >= 2) && (minutes <= 60)) {
    mAuPluriel = true;
    message += " " + minutes + " minutes";
} else if (minutes <= 1) {
    mAuPluriel = false;
    message += heures + " " + minutes + " minute";
} else    
    message = " les minutes ne sont pas valides,";






var secondes = Number(prompt("donner les secondes : "));
secondes = secondes + 1;

if ((secondes >= 2) && (secondes <= 60)) {
    sAuPluriel = true;
    message += " " + secondes + " secondes";
} else if (secondes <= 1) {
    sAuPluriel = false;
    message += heures + " " + minutes + " " + secondes + " seconde";
}else  
    message = " les secondes ne sont pas valides.";




alert(message);
