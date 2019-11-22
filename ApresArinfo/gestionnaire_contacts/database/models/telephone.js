//modelisation standard
module.exports = class Telephone {
    constructor(telephone) {
        this.mobile = false;
        this.region = "";
        this.numero = telephone;
        this.init();
    }

    init() {
        const indicatifTrouve = this.numero.split(' ');
        switch (indicatifTrouve[0]) {
            case '01':
                this.region = 'Région Île-de-France';
                break;
            case '02':
                this.region = ' Région Nord-Ouest';
                break;
            case '03':
                this.region = ' Région Nord-Est';
                break;
            case '04':
                this.region = 'Région Sud-Est';
                break;
            case '05':
                this.region = 'Région Sud-Ouest';
                break;
            case '06':
                this.mobile = true;
                break;
            case '07':
                this.mobile = true;
                break;
        }
    }

}

//plusieurs façons de procéder
//Avec un tableau
let indicatif = "04";

const tabIndexRegions = [
    ["01", 'Région Île-de-France'],
    ["02", 'Région Île-de-France'],
    ["03", 'Région Île-de-France'],
    ["04", 'Région Île-de-France'],
    ["05", 'Région Île-de-France']
]

let element = tabIndexRegions.find(function (el) {
    return el[0] == indicatif;
})
let region = element[1]





//Avec des Objets dans un tableau
const tabIndexRegions2 = [{
        indicatif: "01",
        region: 'Région Île-de-France'
    },
    {
        indicatif: "02",
        region: 'Région Île-de-France'
    },
    {
        indicatif: "03",
        region: 'Région Île-de-France'
    },
    {
        indicatif: "04",
        region: 'Région Île-de-France'
    },
    {
        indicatif: "05",
        region: 'Région Île-de-France'
    },
]

element = tabIndexRegions2.find(function (el) {
    return el.indicatif == indicatif;
})
region = element[1]



//Un Tableau associatif avec le mot reservé Object
//https://www.xul.fr/ecmascript/associatif.php
const tabIndexRegions3 = {
    "01": 'Région Île-de-France',
    "02": 'Région Île-de-France',
    "03": 'Région Île-de-France',
    "04": 'Région Île-de-France',
    "05": 'Région Île-de-France',
}
region = tabIndexRegions3[indicatif]