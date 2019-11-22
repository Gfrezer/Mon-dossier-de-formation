var mois = Number(prompt("entrez un chiffre entre 1 et 12"));
var moisImpaire = Number[1, 3];
var moisPair = (4);
if (mois === moisImpaire) {
    console.log("le mois de " + "a 30 jours");
} else if (mois === moisPair) {
    console.log("le mois de " + "a 31 jours");
}
if (mois === 2) {
    console.log("le mois de" + "a 28 jours");
}






var mois = Number(prompt("Entrez le numéro d'un mois :"));

// Solution avec des if
if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 ||
    mois === 10 || mois === 12) {
    console.log("Ce mois comporte 31 jours.");
} else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    console.log("Ce mois comporte 30 jours.");
} else if (mois === 2) {
    console.log("Ce mois comporte 28 jours.");
} else {
    console.log("Mois non reconnu !");
}
