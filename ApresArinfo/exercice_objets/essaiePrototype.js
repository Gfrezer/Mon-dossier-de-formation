var Client = function (nom, prenom, salaire) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
    if (salaire => 1000) {
        encorePlus = 0;
        this.monCompte = function (interet) {
            interet = salaire * (5 / 100) * 2
            encorePlus += interet + salaire;
            console.log(`${this.nom} à ${encorePlus} euros`)
            return;
        }

    }
    if (salaire < 1000) {
        encoreMoins = 0;
        this.monCompte = function (enMoins) {
            encoreMoins += enMoins + salaire;
            console.log(`${this.nom} à ${encoreMoins} euros `)
            return;
        }
    }

}
Client.prototype = new Client();



var joe = new Client('Joe', "gael", 1000);
var bob = new Client('bob', "mimi", 888);




joe.monCompte(200);
bob.monCompte(-100);