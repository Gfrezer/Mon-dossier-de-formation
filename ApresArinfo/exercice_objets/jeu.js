//POO Programmation Orienté Objet

//le but d'une class est d'avoir un modèle pour chaque objets 
class Personnage {
    constructor(nom, sante, force, or, cle) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.or = or;
        this.cle = cle
        this.xp = 0; // Toujours 0 au début
    }
    // Attaque une cible
    attaquer(cible) {

        if (this.sante > 0) {
            const degats = this.force;
            console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`);
            cible.sante -= degats;

            if (cible.sante > 0) {
                console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
            } else {
                cible.sante = 0;
                let orGagne = this.or;
                orGagne = cible.or;
                let cleEnPlus = this.cle;
                cleEnPlus = cible.cle;
                const bonusXP = 10;
                console.log(
                    `${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience et possède ${this.or} pieces d'or et ${this.cle}`);
                this.xp += bonusXP;
                this.or += orGagne;
                this.cle += cleEnPlus;
            }

        } else {
            console.log(
                `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
            );
        }
    }

    // Renvoie la description du personnage
    decrire() {
        return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience ${this.or} pieces d'or et ${this.cle} clé(s)`;
    }
}




// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
//                            nom      sante force or cle
const aurora = new Personnage("Aurora", 150, 25, 20, 1);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 40, 310, 110, 3);
monstre.attaquer(aurora);


// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());
console.log(monstre.decrire());
//Instances des personnages et monstres