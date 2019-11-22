//prototype general
let XTrem = function () {
    this.init = function (nom, prenom, niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.niveau = niveau;
    }
    this.sortir = function (spot) {
        if ((this.niveau >= spot.niveau) && (this.type == spot.type)) {
            console.log(`${this.prenom} peut naviguer en ${this.type} sur le spot ${spot.nom}`)
        } else console.log(`${this.prenom} ne peut pas naviguer en ${this.type} sur le spot ${spot.nom}`);
    }
}

//les spots
let Spot = function (nom, type, niveau) {
    this.nom = nom;
    this.type = type;
    this.niveau = niveau;
}

//BODYBOARDEUR
let BodyBoarder = function (nom, prenom, niveau) {
    this.init(nom, prenom, niveau);
    //this.maxForceVent = 5;
    this.type = "body";
}
BodyBoarder.prototype = new XTrem();


//PLANCHISTE
let Planchiste = function (nom, prenom, niveau) {
    this.init(nom, prenom, niveau);
    //this.maxForceVent = 10;
    this.type = "planche";
}
Planchiste.prototype = new XTrem();


//

let gael = new Planchiste("Hamonic", "Gaël", 3);
let david = new BodyBoarder("Barreiro", "David", 2);

let datas = [
    ["les conches", "body", 1],
    ["porte 15", "body", 2],
    ["Bud-bud", "body", 3],
    ["l'embarcadère", "planche", 1],
    ["les générelles", "planche", 2],
    ["le phare", "planche", 3]
]

let spots = datas.map(ligne => new Spot(ligne[0], ligne[1], ligne[2]))

for (spot of spots) {
    gael.sortir(spot);

}

function rechercheSpot() {

}