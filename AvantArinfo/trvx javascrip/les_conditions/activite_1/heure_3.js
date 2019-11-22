var heures = Number(prompt("donner une heure : "));

    if ((heures >= 2) && (heures <= 24)) {        
        hAuPluriel = true;
var message = "à la prochaine seconde il sera : " + heures + " heures";
    } else if (heures <= 1) {        
        hAuPluriel = false;
var message = "à la prochaine seconde il sera : " + heures + " heure";     
    } else if ((heures < 0) && (heures > 24)) {
var message = "l'heure n'est pas valide";
    } else if (Number !== heures) {
var message = "l'heure est invalide";
    }
   








alert(message);