const compte = {
    titulaire: "Alex",
    solde: 0,

    renomer(nom) {
        this.titulaire = nom

    },
    crediter(montant) {
        this.solde = this.solde + montant
    },
    decrire() {
        return `ceci est le compte de ${this.titulaire} et son solde est de ${this.solde} euros`
    },
    crediterDeux(a, b) {
        this.solde = this.solde + (a + b)
    }

}
console.log(compte.decrire());
compte.crediter(250)
console.log(compte.decrire());
compte.crediter(-80)
console.log(compte.decrire());
compte.renomer("roro");
console.log(compte.decrire());
compte.crediterDeux(200, -70);
console.log(compte.decrire());
console.log(compte.solde);
console.log(compte.titulaire);
console.log(compte.crediterDeux);



// const mousquetaires = ["athos", "portos", "aramis"];

// for (i = 0; i = mousquetaires.lenght; i++) {
//     console.log([i]);
// }
// mousquetaires.push("Artagnan");

// mousquetaires.forEach(mousquetaires => {
//     console.log(mousquetaires);
// });

// mousquetaires.splice(2, 1);


const nombres = [11, 3, 7, 2, 9, 10];
let somme = 0;
for (i = 0; i < nombres.length; i++) {
    somme = somme + nombres[i]

}
console.log(somme)

const valeurs = [15, 3, 7, 52, 9, 10];
let valPlus = 0;

for (i = 0; i < valeurs.length; i++) {
    if (valPlus < valeurs[i]) {
        valPlus = valeurs[i]
    }
}



console.log(valPlus)


// const prenom = "Odile";
// for (let i = 0; i < prenom.length; i++) {
//     console.log(prenom[i]);
// }

// const nPrenom = "de ray";
// for (const lettre of nPrenom) {
//     console.log(lettre);
// }
const voyelle = ["a", "o", "i", "e", "u", "y"];
const totos = ["RadAr", "Tic et tac", "Oasis Oasis oh"];

totos.forEach(toto => {
    let mot1 = [];
    console.log(`debut du traitement de ${toto}`)
    //const prenom = "odile";

    const tabPrenom = Array.from(toto);

    for (i = 0; i < voyelle.length; i++) {
        tabPrenom.forEach(lettre => {
            if (lettre === voyelle[i])
                mot1.push(lettre);

        })
    };
    console.log(`les voyelles de ${toto} sont ${mot1}`)
    console.log(`fin du traitement de ${toto}`)
})






// for (i = 0; i < prenom.length; i++) {
//     for (j = 0; j < voyelle.length; j++) {
//         if (prenom === voyelle[i])
//             console.log(prenom);
//     }
// };
// const mot = ["RadAr", "Tic et tac", "Oasis Oasis oh"];

// for (let i = 0; i < voyelle.length; i++) {
//     if (mot[i] === voyelle[i]) {
//         console.log(mot)
//     }
// }



let lettres = ["a", "b", "e", "l", "o", "s"];
let leet = ["4", "8", "3", "1", "0", "5"]

// function convertirLettreLeet(lettre) {
//     let position = -1;
//     let trad = lettre;
//     // for (i = 0; i < lettres.length; i++) {
//     //     if (lettre === lettres[i]) {
//     //         position = i;
//     //     }
//     // }
//     position = lettres.indexOf(lettre)
//     if (position >= 0) {
//         trad = leet[position];
//     }
//     return trad;
// }

// console.log(convertirLettreLeet("e"));
// console.log(convertirLettreLeet("o"));
// console.log(convertirLettreLeet("s"));
// console.log(convertirLettreLeet("m"));




function convertirMotLeet(mot) {
    let traduction = "";

    for (j = 0; j < mot.length; j++) {
        let position = -1;

        for (i = 0; i < lettres.length; i++) {
            if (mot[j] === lettres[i]) {
                position = i;
                if (position >= 0) {
                    traduction += leet[position];
                }
            }
        }
        if (position === -1) {
            traduction += mot[j];
        }



    }

    return traduction;
}

console.log(convertirMotLeet("nbobof"));
console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"



function estPalindrome(motaTester) {


    function reverseString(motaTester) {
        return motaTester.split("").reverse().join("");
    }
    let motInverse = "";
    motInverse = reverseString(motaTester);

    let estPalin = true;

    /*for (i = 0; i < motaTester.length; i++) {
        if (motaTester[i] !== motInverse[i]) {
            estPalin = false;
        }
    }*/
    let i = 0;
    while (motaTester[i] === motInverse[i] && i < motaTester.length) {
        i++
    }

    //if (estPalin) {
    if (i == motaTester.length) {
        console.log(`le mot ${motaTester} est palindrome a ${motInverse}`)
    } else {
        console.log(`le mot ${motaTester} n'est pas un palindrome a ${motInverse}`)
    }
}

estPalindrome("radar");