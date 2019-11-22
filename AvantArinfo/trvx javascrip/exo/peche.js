// Tableau prenom, date, lieu, nombre, espece 
var donnees = [
    ["yvan", "15/04/18", "montaigu", 1, "brochet"],
    ["yvan", "15/04/18", "montaigu", 10, "gardon"],
    ["gael", "15/04/18", "champs", 10, "truite"],
    ["gael", "16/04/18", "champs", 2, "carpe"],
    ["florent", "20/04/18", "champs", 30, "gardon"],
    ["florent", "15/04/18", "venansault", 5, "brochet"]
];


var pecheur1 = new Pecheur("yvan", "morvan", "pas terrible");
var pecheur2 = new Pecheur("florent", "blondeau", "pas terrible");
var pecheur3 = new Pecheur("gael", "hamonic", "pas terrible");
var pecheurs = [pecheur1, pecheur2, pecheur3];

function cherchePecheur(prenomPecheur) {
    
    var pecheur;   
    var i = -1;
    do{        
        i++;  
        pecheur = pecheurs[i];
        
    }while(prenomPecheur !== (pecheur.prenom));    
    return pecheur;
           
}


function Prise(nombre, espece) {
    this.nombre = nombre;
    this.espece = espece;
};

function Sortie(date, lieu) {
    this.date = date;
    this.lieu = lieu;
    this.prises = [];
};


function Pecheur(prenom, nom, niveau) {
    this.prenom = prenom;
    this.nom = nom;
    this.niveau = niveau;
    this.sorties = [];

    this.pecher = function (date, lieu, nombre, espece) {
        var action = this.prenom + this.nom + " le " + date + " à " + lieu + " à peché " + nombre + espece;
        var prise = new Prise(nombre, espece);
        var sortie = new Sortie(date, lieu);
        sortie.prises.push(prise);
        this.sorties.push(sortie);
        return action;        
    };
    
    
    

};

/*
cherchePecheur("gael").pecher("", "montaigu", 10,  "gardon");


 var pecheur1 = Object.create(Pecheur);
pecheur1.init("yvan","morvan","pas terrible");

var pecheur2 = Object.create(Pecheur);
pecheur2.init("florent","blondeau","pas terrible"); 

var pecheur3 = Object.create(Pecheur);
pecheur3.init("gael","thekiller","trop fort");*/

//pecheur1.pecher("15/12/18", "montaigu", 10,  "gardon");












