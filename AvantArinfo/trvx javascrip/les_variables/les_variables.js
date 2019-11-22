/*
//Déclarer une variable
var nomDeMaVariable;
//attribuer une valeur à la variable
var nomDeMaVariable = valeur;
//ou,
nomDeMaVariable = valeur;
//ou,
var nomDeMaVariable = valeur, nomDeMaVariable1 = valeur, nomDeMaVariable2 = valeur;

//Les types de variables
var nomDeMaVariable = valeur du type de la variable ("string", Number, booleen(true,false);

//La concaténation
var nomDeMaVariable = "string" + Number + "string" + booleen;
                             
//quelques instructions
typeof = vérifier le type d une variable;
parseInt = convertir la chaîne de caractères en nombre.
+ "" + = Convertir un nombre en chaîne de caractères

//EXEMPLES
var nom = "medor ", race = "berger", taille = 120;
concatener = nom + race + taille;
alert(concatener);


var a = "trureu", b = 12, c = "3";
console.log(typeof a);
console.log(typeof c);
c = parseInt(c);
console.log(typeof c);
d = b + c;
console.log(d);

const meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
  case "soleil":
    console.log("Sortez en t-shirt.");
    break;
  case "vent":
    console.log("Sortez en pull.");
    break;
  case "pluie":
    console.log("Sortez en blouson.");
    break;
  case "neige":
    console.log("Restez au chaud à la maison.");
    break;
  default:
    console.log("Je n'ai pas compris !");
}
const meteo1 = prompt("Quel temps fait-il dehors ?");
if (meteo1 === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo1 === "vent") {
  console.log("Sortez en pull.");
} else if (meteo1 === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo1 === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris !");
}

const moyenne = 15;

if (moyenne < 10) {
  console.log("vous etes recalé");
}else if ((moyenne => 11) && (moyenne <=12)) {
  console.log("vous etes recu");
}else  {
  console.log("vous ets recu avec mention");
}

*/

let heures = 23; // Faire varier cette variable entre 0 et 23
let minutes = 45; // faire varier cette variable entre 0 et 59
let secondes = 59;

if (secondes <= 59) {
    secondes++;
    if (secondes === 60) {
        secondes = "00";
    }
}
if (secondes === "00") {
    minutes++;
    if (minutes === 60) {
        minutes = "00";
    }
}
if (minutes === "00") {
    heures++;
    if (heures === 24) {
        heures = "00";
    }
}
if (heures === "00") {
    console.log("à la prochaine seconde il sera minuit")

} else {
    console.log("à la prochaine seconde il sera " + (heures) + " heures " + (minutes)+" minutes " + "et " + (secondes)+" secondes");
}


