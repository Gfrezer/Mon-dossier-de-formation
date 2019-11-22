// console.log("Bienvenue dans le gestionnaire de contacts !");
// console.log("1 : Lister les contacts");
// console.log("2 : Ajouter un contact");
// console.log("3 : Supprimer un contact");
// console.log("4 : Quitter");


// //fonction pour choisir le numero
// function promptMessage() {
//     saisie = prompt("Choisissez une action entre 1 et 4");
//     if (saisie === null) {

//     }
//     return saisie;
// }
// promptMessage();



// class Contact {
//     constructor(nom, prenom, telephone) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.telephone = telephone;
//     }
//     afficher() {
//         console.log(`nom : ${this.nom}, prénom : ${this.prenom}, téléphone : ${this.telephone}`);
//     }
//     delete() {

//     }
// }


// let nouveauContacts = function (contact) {
//     this.nom = contact[0];
//     this.prenom = contact[1];
//     this.telephone = contact[2]
//     tableau.push(new Contact(this.nom, this.prenom, this.telephone))
// }

// let tableau = [
//     new Contact("lolo", "gailard", "256696332"),
//     new Contact("alex", "david", "256332115"),
//     new Contact("toto", "mimi", "02.15.03.12.41"),
//     new Contact("Clara", "jojo", "02.05.03.02.01"),
// ];


// while (saisie <= 3) {
//     if (saisie === "1") {
//         console.log("Voici la liste des contacts")
//         tableau.forEach(contact => {
//             contact.afficher();
//             if () {
//                 console.log("Voici le gestionnaire mis à jour !")
//             }
//         })
//     }
//     if (saisie === "2") {
//         let nouveauContact = prompt("entrez nouveau contact");
//         let contact = nouveauContact.split(" ");
//         nouveauContacts(contact);
//         alert("Nouveau contact bien ajouté !");

//     }
//     if (saisie === "3") {
//         let supprimer = prompt("Voulez vous supprimer ce contact ? repondez par O ou N");
//         if (supprimer = "O") {
//             tableau.delete()
//         }
//     }




//     if ((saisie === "4") || (saisie === null)) {
//         let quitter = prompt("Voulez vous quitter le gestionnaire de contacts ? repondez par O ou N");
//         if (quitter === "O") {
//             break;
//         }
//     }
//     promptMessage();
// }

// console.log("Vous avez quitté le gestionnaire de contacts");












console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("2 : Lister nouveau contact");
console.log("3 : Supprimer un contact");
console.log("4 : Quitter");


//fonction pour choisir le numero


const MSG_SAISIR_ACTION = "Choisissez une action entre 0 et 5";
const MSG_LISTE_NOUVEAUX_CONTACTS = "voici la liste des nouveaux contacts ";
const MSG_LISTE_CONTACTS = "Voici la liste des contacts";
const MSG_SUPPRIME_CONTACT = "Voulez vous supprimer ce contact ? repondez par O ou N";
const MSG_QUITTER = "Voulez vous quitter le gestionnaire de contacts ? repondez par O ou N"


class Contact {
    constructor(nom, prenom, telephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
    }
    afficher() {
        console.log(`nom : ${this.nom}, prénom : ${this.prenom}, téléphone : ${this.telephone}`);
    }

}

class GestionnaireDeContacts {
    constructor(tab) {
        this.contacts = Array.from(tab) || [];
        this.dernierIndex = this.contacts.length - 1;
    }



    listerContacts() {
        console.log(MSG_LISTE_CONTACTS);
        let i = 0;
        this.contacts.forEach(contact => {
            contact.afficher();
            if (this.dernierIndex < i) {
                console.log("    nouveau contact");
            }
            i++;
        })
        this.dernierIndex = this.contacts.length - 1;
    }

    ajouterContact() {
        let nouveauContact = prompt("entrez nouveau contact");
        let [nom, prenom, telephone] = nouveauContact.split(" ");
        this.contacts.push(new Contact(nom, prenom, telephone));
        alert("Nouveau contact bien ajouté !");
    }


    listerNewContacts() {
        console.log(MSG_LISTE_NOUVEAUX_CONTACTS);
        for (let i = this.dernierIndex + 1; i < this.contacts.length; i++) {
            let contact = this.contacts[i];
            contact.afficher();
        }
    }

    supprimerContact() {
        let contactSupprimer = prompt("choisir un nom à supprimer!");
        let supprimer = prompt(`Voulez vous supprimer ${contactSupprimer} de la liste ?`);
        if (supprimer = "O") {

            let index = this.contacts.findIndex(contact => contact.nom === contactSupprimer);
            this.contacts.splice(index, 1);
        }
    }
}


let tableau = [
    new Contact("lolo", "gailard", "256696332"),
    new Contact("alex", "david", "256332115"),
    new Contact("toto", "mimi", "02.15.03.12.41"),
    new Contact("Clara", "jojo", "02.05.03.02.01")
];


let gestionnaire = new GestionnaireDeContacts(tableau);

console.log(tableau);
console.log(gestionnaire.contacts);

let saisie = prompt(MSG_SAISIR_ACTION);

while (saisie !== null) {
    if (saisie === "1") {
        gestionnaire.listerContacts();
    } else if (saisie === "2") {
        gestionnaire.ajouterContacts();
    } else if (saisie === "3") {
        gestionnaire.ajouterNewContact();
    } else if (saisie === "4") {
        gestionnaire.supprimerContact();
    } else if (saisie === "5") {
        let quitter = prompt(MSG_QUITTER);
        if (quitter === "O") {
            break;
        }
    } else {
        alert("tapez bon");
    }
    saisie = prompt(MSG_SAISIR_ACTION);
}

console.log("Vous avez quitté le gestionnaire de contacts");