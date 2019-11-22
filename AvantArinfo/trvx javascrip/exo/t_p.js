//Utiliser JavaScript pour afficher la valeur en euros de 2001 francs.
/*
console.log(2001 / 6.55957);



//Définir une fonction JavaScript qui pour une valeur donnée en francs fournit la valeur en euros.

function convertirFrEnEu(sommeEnFr){
    var resultat =  sommeEnFr/6.55957;
    return resultat;
    
}
convertirFrEnEu(2);


//Utiliser cette fonction pour convertir toutes les sommes comprises entre 0 et mille francs avec un pas de 50 francs, et présenter le résultat dans un tableau.
function convertirFrEnEu(sommeEnFr) {
    var tableau = [];
    while (sommeEnFr < 1000) {
        var resultat = sommeEnFr / 6.55957;
        tableau.push(resultat);
        sommeEnFr += 50;
    }
    return tableau;
}
console.log(convertirFrEnEu(0));




function convertirFrEnEu(sommeEnFr){
    for(i = 0; i < 1000; i++){
    var resultat =  sommeEnFr/6.55957;
    sommeEnFr += 50; 
  }      
      return resultat;    
}
console.log(convertirFrEnEu(0));


function convertirFrEnEu(sommeEnFr) {
    var resultat = sommeEnFr / 6.55957;
    return resultat;
}


var tab = [];
for (sommeEnFr = 0; sommeEnFr < 1000; sommeEnFr += 50) {    
    tab.push(convertirFrEnEu(sommeEnFr));
}




function convertirEnFf(sommeEnFf) {
    var resultat = sommeEnFf * 6.55957;
    return resultat;
}


var tab1 = [];
for (sommeEnFf = 1; sommeEnFf <= 200; sommeEnFf += 10) {
    tab1.push(convertirEnFf(sommeEnFf));
}

*/
/*
function multiplication(a) {
    var message = "table de multiplication de : " + a + "\n";
    for (var i = 0; i <= 9; i++) {
        var chiffre = i * a;
        message += i + " x " + a + " = " + chiffre + "\n";
    }
    return message;
}

function plusieurTab(debut, fin) {
    for (var i = debut; i <= fin; i++) {
        console.log(multiplication(i));
    }
}
plusieurTab(3, 20);









//http://www.grappa.univ-lille3.fr/~torre/Enseignement/tp/JavaScript/

//https://tech.io/playgrounds/3777/exercices-de-javascript-pour-debutants-en-informatique/javascript---les-variables


var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}



var voyel = ["a", "e", "i", "o", "u", "y"];
for (var i = 0; i < voyel.length; i++) {
    console.log(voyel[i]);
}

function voyelle() {
    var saisie = prompt("entrez une lettre :");
    var estVoyelle = false;
    var voyelles = ["a", "e", "i", "o", "u", "y"];
    for (var i = 0; i < voyelles.length; i++) {
        if (saisie === voyelles[i]) {
            estVoyelle = true;
            break;
        }
    }
    if (estVoyelle === true) {
        alert("c'est une voyelle");
    } else {
        alert("c'est une consonne");
    }
}

voyelle();

function voyelleW() {
    var saisie = prompt("entrez une lettre :");
    var estVoyelle = false;
    var voyelles = ["a", "e", "i", "o", "u", "y"];
    var i = 0;
    while ( i < voyelles.length ) {
        if (saisie === voyelles[i]) {
            estVoyelle = true;           
            break;            
        }
        i++
    }
    if (estVoyelle === true) {
        alert("c'est une voyelle");
    } else {
        alert("c'est une consonne");
    }
}




var ch =  prompt (Number);

var i = 0
while (i <10){
    i = i + 1;
    resultat parseInt = ch + i;
    
    console.log(resultat);
}

*/

var a = 1;
var i = 2;
var chiffre = prompt("entrez chiffre");
while (i <= chiffre){
    a = a * i
        i ++;
}
console.log(a);

var note = [];
for (i=0 ; i<6; i++){
    var voyelle = prompt("entrez voyelle");
    note[i] = voyelle;
}
console.log(note);

