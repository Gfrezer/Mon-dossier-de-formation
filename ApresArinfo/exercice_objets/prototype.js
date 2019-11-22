//POO Programmation Orienté Objet
var Personne = function (nom) {
    this.name = nom;
    this.peutParler = true;
    this.salutation = function () {
        if (this.peutParler) {
            console.log('Bonjour, je suis ' + this.nom);
        }
    };
};



var Employe = function (nom, titre) {
    this.nom = nom;
    this.titre = titre;
    this.salutation = function () {
        if (this.peutParler) {
            console.log("Bonjour, je suis " + this.nom + ", le " + this.titre);
        }
    };
};
Employe.prototype = new Personne();




var Client = function (nom, prenom) {
    this.nom = nom;
};
Client.prototype = new Personne();



var Mime = function (nom) {
    this.nom = nom;
    this.peutParler = false;
};
Mime.prototype = new Personne();




var bob = new Employe('Bob', 'bricoleur');
var joe = new Client('Joe');
var rg = new Employe('Red Green', 'réparateur');
var mike = new Client('Mike');
var mime = new Mime('Mime');



bob.salutation();
// Bonjour, je suis Bob, le bricoleur

joe.salutation();
// Bonjour, je suis Joe

rg.salutation();
// Bonjour, je suis Red Green, le réparateur

mike.salutation();
// Bonjour, je suis Mike

mime.salutation();


const unObjet = {
    a: 2,
    decrire() {
        console.log(`La valeur de a est : ${this.a}`)
    }
};
console.log(unObjet); // {a: 2}
//ou
console.log(unObjet.a); // 2
unObjet.decrire() // La valeur de a est : 2


// Crée unAutreObjet avec unObjet comme prototype
const unAutreObjet = Object.create(unObjet);
console.log(unAutreObjet); // {}
console.log(unAutreObjet.a); // 2
unAutreObjet.decrire() // La valeur de a est : 2

// changer la valeur de a de unObjet
unObjet.a = 5;
console.log(unObjet); // {a: 5}
console.log(unObjet.a); // 5

//changer la valeur de a avec unAutreObjet
unAutreObjet.a = 6;
console.log(unAutreObjet); // {a: 6}
console.log(unAutreObjet.a); // 6
console.log(unObjet);
console.log(unObjet.a);
unObjet.a = 45;
console.log(unAutreObjet.a);
unObjet.decrire() // La valeur de a est : 45
unAutreObjet.decrire() // La valeur de a est : 6

//Voir si la valeur de unAutreObjet à changé
console.log(unAutreObjet); // {a: 6}
console.log(unAutreObjet.a); // 6


//ajouter b et sa valeur dans unObjet
unObjet.b = 8;
console.log(unObjet); // {a: 45, b: 8}
console.log(unObjet.b); // 8

//Voir si les valeurs ont suivis dans unAutreObjet
console.log(unAutreObjet); // {a: 6}
console.log(unAutreObjet.a); // 6
console.log(unAutreObjet.b); // 8


//creer un prototype appelé c dans unAutreObjet
unAutreObjet.c = 10;
console.log(unAutreObjet); // {c: 10}
console.log(unAutreObjet.c); // 10

//voir tous les objets
console.log(unObjet); // {a: 45, b: 8}
console.log(unAutreObjet); // {a: 6, c: 10}
console.log(unAutreObjet); // {a: 6, c: 10}

console.log(unAutreObjet.a); // 6
console.log(unAutreObjet.b); // 8
console.log(unAutreObjet.c); // 10


//manipulation avec encoreUnObjet
// Crée encoreUnObjet avec unAutreObjet comme prototype
const encoreUnObjet = Object.create(unAutreObjet);
console.log(encoreUnObjet); // {}
console.log(encoreUnObjet.a); // 6
console.log(encoreUnObjet.b); // 8
console.log(encoreUnObjet.c); // 10

//ajout de d dans encoreUnObjet 
encoreUnObjet.d = 200;
console.log(encoreUnObjet); // {d: 200}
console.log(unObjet.c); // undefined
console.log(unObjet.d); // undefined
//meme resultat avec unAutreObjet
console.log(encoreUnObjet.a); // 6




function maFonction(monObjet) {
    monObjet = "Toyota";
    console.log(monObjet);
    return monObjet;

}
maFonction(monObjet); // "Toyota"

console.log(maFonction(monObjet));