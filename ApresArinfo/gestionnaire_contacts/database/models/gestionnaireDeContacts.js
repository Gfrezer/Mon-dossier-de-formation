const Contact = require("../models/contact");
const Telephone = require("../models/telephone");

class GestionnaireDeContacts {
    constructor() {
        this.contacts = this.chargerContacts();
        this.id = this.contacts.length;
    }

    ajouterContact(nom, prenom, telephone) {
        let phone = new Telephone(telephone);
        this.contacts.push(new Contact(this.id, nom, prenom, phone));
        this.id = this.id + 1;
        this.sauvegarde();
    }

    supprimerContactById(id) {
        let index = this.contacts.findIndex(contact => contact.id === id);
        if (index > -1) {
            this.contacts.splice(index, 1);
            this.sauvegarde();

        }
    }
    supprimerContact(nom) {
        console.log("ca passe 2")
        let index = this.contacts.findIndex(contact => contact.nom === nom);
        if (index > -1) {
            this.contacts.splice(index, 1);
            this.sauvegarde();
        }
    }

    chargerContacts() {
        return [];
    }

    sauvegarde() {

    }

}

module.exports = new GestionnaireDeContacts();