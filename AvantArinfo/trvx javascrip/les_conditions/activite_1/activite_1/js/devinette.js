/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme



var nombreDeCoup = 1;
while (jeu !== solution && nombreDeCoup <= 6) {
    var jeu = prompt("veuillez entrer un chiffre entre 1 et 100");

    if (jeu < solution) {
        console.log(jeu + " est trop petit");
    } else if (jeu > solution) {
        console.log(jeu + " est trop grand")
    } else if (jeu == solution) {
        console.log("Bravo...! " + jeu + " est le bon chiffre");
        console.log("Vous avez trouvé en " + nombreDeCoup + " coup(s)");
        break;
    } else if (jeu !== solution) {
        console.log("Je n'ai pas compris!")
    }
    nombreDeCoup++;
}

if ((jeu < solution) || (jeu > solution)) {
    console.log("Perdu... la solution etait " + solution);
}
