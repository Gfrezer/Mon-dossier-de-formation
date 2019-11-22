var heures = Number(prompt("donner une heure : "));
var minutes = Number(prompt("donner les minutes : "));
var secondes = Number(prompt("donner les secondes : "));
secondes = secondes + 1;
if ((heures >= 2) && (heures <=24)){
console.log("a la prochaine seconde il sera : " + heures + " heures " + minutes + " minutes " + "et " + secondes + " secondes");
}
else if (heures <= 1){
console.log("a la prochaine seconde il sera : " + heures + " heure " + minutes + " minutes " + "et " + secondes + " secondes");
}
else if (minutes <= 1){
console.log("a la prochaine seconde il sera : " + heures + " heures " + minutes + " minute " + "et " + secondes + " secondes");
}
