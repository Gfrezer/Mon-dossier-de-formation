/*
var table = new Array("gael","florent","yvan");
console.log(table);


var table = new Array("Pierre", "Paul", "Jacques");

alert("La seconde case vaut : " + table[1]);   // on lit l'element d'indice 1

table[1] = "Toto";   // on le modifie

table[3] = "Dupont";   // on cree un nouvel element

var t = new Array("Pierre", "Paul", "Jacques");

t[1] = "Toto";   // on le modifie
t[3] = "Dupont";   // on cree un nouvel element
console.log("La seconde case vaut : " + t[1]) ;   // on lit l'element d'indice 1




var scores = new Array();

scores["Toto"] = 142;
scores["Pierre"] = 137;
console.log(scores);



var table = new Array("Pierre", "Paul", "Jacques");
table[3] = "Toto";
table.sort();
console.log(table);



var films = ["les bronzés", "le seigneur des anneaux", "wall street", "spy game"];
console.log(films[1]);
console.log(films.length);
films.forEach(function (element) {
    console.log(element);
})
films.push("podium");
console.log(films);


var film = {
    init: function (titre, annee, note) {
        this.titre = titre;
        this.annee = annee;
        this.note = note;
    },
    decrire: function () {
        var description = this.titre + " (" + this.annee + ") " + +this.note + " sur 20";
        return description;

    }

};
var tabFilms = [];

var film1 = Object.create(film);
film1.init(films[0], 1975, 18);
tabFilms.push(film1);

var film2 = Object.create(film);
film2.init(films[1], 2001, 3);
tabFilms.push(film2);

var film3 = Object.create(film);
film3.init(films[2], 1982, 16);
tabFilms.push(film3);

var film4 = Object.create(film);
film4.init(films[3], 2000, 18);
tabFilms.push(film4);

var film5 = Object.create(film);
film5.init(films[4], 2008, 14);
tabFilms.push(film5);

films.forEach(function (film) {
    console.log(film);
})

tabFilms.forEach(function (film) {
    console.log(film.decrire());
});


var mTrois = ["Athos","Portos","Aramis"];
console.log ("Voici les trois mousquetaires" );
for (var i = 0; i < mTrois.length; i++){
    console.log(mTrois[i]);

}
mTrois.push("D'artagnan");
console.log("A present,ils sont quatre");
mTrois.forEach(function (elem){
    console.log(elem);
});






var valeurs = [11, 3, 7, 2, 9, 5];
var valeursP = [30, 12, 56];

function mutuel(valeurs) {
    
    var somme = 0;
    for (i = 0; i < valeurs.length; i++) {
        somme += valeurs[i];
    }

    var sommeP = 0;
    for (i = 0; i < valeursP.length; i++) {
        sommeP += valeursP[i];
    }
    
    var resultat = somme + sommeP;
    return resultat;

}

console.log(mutuel(valeurs, valeursP));




function plusGrand(valeurs){
    var somme = 0;
    for(i=0; i<valeurs.length; i++){
        somme > valeurs[i];
    }
    return somme;
}
console.log(plusGrand(valeurs));



var scores = new Array();
scores["Toto"] = 142;
scores["Pierre"] = 137;
console.log(scores);


var tableau = ["gael ", "florent ", "yvan "];
tableau[3] = "david";





var classement = {
    scores: "david" + "=" + 23 + " points" + " et",
    scores1: "laurent" + "=" + 34,
};
var classem = [""];
for (var compile in classement) {
    classem += compile + classement[compile];
}
console.log(classem);





console.log(tableau);

console.log(tableau.length);





function lire(tableau) {
    var texte = "le tableau contient :"
    for (i = 0; i < tableau.length; i++)
        texte += tableau[i];
    return texte;
}
console.log(lire(tableau));







//

var poisson = {
    fish: "brochet",
    fish1: "cendre",
    rascasse: "carpe",
    fish3: "perche",
};
var p = "";
for (var indice in poisson) {
    p += indice + " = " + poisson[indice] + "\n";
}
console.log(p);



var valeurs = [11, 3, 7, 2, 9, 10];
var resultat = (Math.max(...valeurs));
console.log("le maximum des elements vaut " + resultat);


var tableau = [];
var motsRentres = 0;
while (mots !== "stop" && motsRentres < Infinity) {
    var mots = prompt("entrez un mot : ");
    if (mots !== "stop") {
        tableau.push(mots);
        alert("entrez a nouveau un mot ");
    }

    motsRentres++;
    if (mots == "stop") {
        console.log("vous avez trouvez le bon mot");
        break;
    }
}


tableau.forEach(function (mots) {
    console.log(mots);
});


 var operation = new Array();
   operation["brochet"] = function(x,y){ return x+y; };
   operation["perche"] = function(x,y){ return x+y; };
   operation["mult"] = function(x,y){ return x*y; };
   operation["div"] = function(x,y){ return x/y; };
   operation["moy"] = function(x,y){ return (x+y)/2; };


var a = parseFloat( prompt("lundi ?") );
var b = parseFloat( prompt("mardi ?") );
var fct = prompt("poisson ?");

var resultat = operation[fct](a,b);
console.log("Resultat : " + resultat + fct);
*/


function nom() {
    var saisie = prompt("rentrez nom :");
    for (i = 0; i < saisie.length; i++)
        console.log(saisie[i]);
}

nom();
function chien() {
    var saisie = prompt("rentreze nom du chien")
}