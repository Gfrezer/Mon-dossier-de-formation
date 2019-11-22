class Client {
    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde
    }
    crediter(montant) {
        let resultat = this.solde;
        resultat = resultat + montant;
        this.solde = resultat;


    }
    decrire() {
        return console.log(`le compte du titulaire ${this.titulaire} à sur son compte ${this.solde} euros`);
    }
}




let clients = ["Alex", "bob", "René"];
for (i = 0; clients.length; i++) {
    console.log("ca tourne");
}

// clients.prototype = new Client();


// clients.crediter(1000);




// Client.prototype = new clients();
// clients.forEach(compte => {
//     compte.crediter(1000);
//     console.log(compte.decrire());
// })