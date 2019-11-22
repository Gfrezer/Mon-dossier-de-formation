var tour = 1;
while (tour <= 10) {
    console.log("ceci est le " + tour + " tour");
    tour++;
}
var compteur;
for (compteur = 1; compteur <= 10; compteur++) {
    console.log("ceci est le " + compteur + " tour");
}




for (var i = 1; i <= 10; i++) {

    if (i % 2 === 1) {
        console.log(i + " est impair");
    } else if (i % 2 === 0) {
        console.log(i + " est pair");
    }
}





console.log("table de multiplication de : ");
for (var multi = 0; multi <= 100; multi) {
    multi = multi + 4;
    console.log(multi);


}
var nombre = 0;
while ((nombre < 1) || (nombre > 10)) {
    nombre = Number(prompt("Entrez un nombre entre 0 et 10 : "));
}

console.log("Voici la table de multiplication de " + nombre);
for (var i = 1; i <= 14; i++) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
}




var jeu =prompt("voulez vous jouez ni oui ni non ?");

while ((jeu !== "oui") && (jeu !== "non")){
    jeu = prompt("voulez vous recommencer ?");
    
}
jeu = alert("vous avez perdu !");


var i = 0;
while (i <= 4) {
   console.log("J'ai soif !");
   i++;
}
for (var i = 1; i < 5; i++) {
   console.log("J'ai faim !");
}







