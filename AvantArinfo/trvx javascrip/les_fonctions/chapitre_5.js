/*
function direBonjour(prenom) {
    var message = "Bonjour! " + prenom + "!";
    return (message);
}
console.log(direBonjour("gael"));
console.log(direBonjour("florent"));



console.log(Math.min(29, 5, 34, 78));




function dirAurevoir(nom, prenom, deuxiemeprenom) {
    var message = "Bonjour " + nom + prenom + deuxiemeprenom + "le meilleur!";
    return (message);
}
console.log(dirAurevoir("hamonic ", "michel "));




function min(number1, number2) {
    var message = "le plus petit est " + Math.min(number1, number2);
    return message;
}
console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1

function calculer(number1, ope, number2) {

    if (ope === "+") {
        var resultat = number1 + number2;
    }
    if (ope === "-") {
        resultat = number1 - number2;
    }
    if (ope === "*") {
        resultat = number1 * number2;
    }
    if (ope === "/") {
        resultat = number1 / number2;
    }
    return resultat;
}
console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0,
console.log(calculer(12, "/", 0)); // Doit afficher Infinit



function aire(rayon) {
    var aire = rayon * rayon * Math.PI;
    return aire;
}
var unNom

function circon(rayon) {
    var circon = rayon * 2 * Math.PI;
    return circon;
}

var rayon = prompt("entrez un chiffre ");
console.log("l aire du cercle est de :" + aire(rayon));
console.log("la circonference du cercle est de " + circon(rayon));


function carre(x) {
    var carre = x * x;
    return carre;
}

for(x=0; x<=100; x++){
    console.log(carre(x));
}
*/


function calculate(a,b,c){
    d =(a+b) + c;
    return d;    
}






function calculate1(a, b){
    d = a + b;
    return d;
}
var y = calculate1(calculate(1,2,3), 2);
console.log(y);













