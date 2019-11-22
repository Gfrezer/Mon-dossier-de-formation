var heures = Number(prompt("donner une heure : "));

if ((heures >= 2) && (heures <= 24)) {
    hAuPluriel = true;
} else if (heures <= 1) {
    hAuPluriel = false;
} else if ((heures < 0) && (heures > 24)) {
    console.log("l'heure est invalide");
}



var minutes = Number(prompt("donner les minutes : "));

if ((minutes >= 2) && (minutes <= 60)) {
    mAuPluriel = true;
} else if (minutes <= 1) {
    mAuPluriel = false;
} else if ((minutes < 0) && (minutes > 60)) {
    console.log("les minutes sont invalides");
}


var secondes = Number(prompt("donner les secondes : "));
secondes = secondes + 1;

if ((secondes >= 2) && (secondes <= 60)) {
    var sAuPluriel = true;
} else if (secondes <= 1) {
    var sAuPluriel = false;
} else if ((secondes < 0) && (secondes > 60)) {
    console.log("les secondes sont invalides");
}


var message = "";
message += "à la prochaine seconde il sera : " + heures + " heure";
if (hAuPluriel) {
    message += "s ";
}

message += " " + minutes + " minute";
if (mAuPluriel) {
    message += "s";
}

message += " " + secondes + " seconde";
if (sAuPluriel) {
    message += "s";
}


alert(message);
