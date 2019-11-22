class Animal {
    constructor(animal, nom, race, taille) {
        this.animal = animal;
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }
    decrire() {
        return `${this.nom} est un ${this.race} mesurant ${this.taille} cm`
    }
    aboyer() {
        if (this.animal === "chien") {
            return `Tiens, un chat ! ${this.nom} aboie : GRRRRRRRRRR`;
        } else {
            return `Tiens, un chien ! ${this.nom} miaule :miaouuuuu`;
        }
    }
}





let Milou = new Animal("chien", "milou", "terreneuve", 155);

let tutu = new Animal("chat", "tutu", "angora", 75);
console.log(tutu.decrire());
console.log(tutu.aboyer());







// const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// // "Crockdur est un mâtin de Naples mesurant 75 cm"
// console.log(crockdur.decrire());
// // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
// console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);

// const milou = new Chien("Milou", "fox-terrier", 26);
// // "Milou est un fox-terrier mesurant 26 cm"
// console.log(milou.decrire());
// // "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
// console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);