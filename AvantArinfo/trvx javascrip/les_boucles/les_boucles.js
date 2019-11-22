/*//les boucles

//L'incrémentation et la décrémentation.
var nombre = 0;
number = number + 1; //total 2

var nombre1 = 0;
nombre1++; //total 2
//ou
nombre--; //total 0

//++ avant pour recuperer la valeur a var number.
var number = 0;
var output = ++number;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 1 »
//++ apres, pert la valeur a var number.
var number = 0;
var output = number++;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 0 »


//La boucle while
//Pour faire fonctionner une boucle, il est nécessaire de définir une condition. Tant que celle-ci est vraie (true), la boucle se répète. Dès que la condition est fausse (false), la boucle s'arrête.


var number = 0;             //                var number = 0;
while (number < 5) {        //                {
                            //                     number = number + 1;//number=1
                            //                     number = number + 1;//number=2
   number = number + 1;     //     <=>             number = number + 1;//number=3
                           //                      number = number + 1;//number=4
                            //                     number = number + 1;//number=5
}                          //                 }
//number = 5                                //number = 5


console.log(number);
//incrementé.
var number = 1;
while (number < 5) {
    number++;
}
alert(number);

//exemple while avec nombre d essaie.

var bonPrenom = "gael";
var nombre = 0
while (nombre < 5) {
    var saisie = prompt("entrez un prenom lig 52");
    if (saisie !== bonPrenom) {
        alert("ce n'est pas le bon prenom !");
        nombre++;
    } else if (saisie === bonPrenom) {
        alert("c est le bon prenom");
        break;
    }
}
//exemple while avec booleen.
var bonPren = "toto";
var nombre = 0
var saisie = prompt("entrez prenom lig 64");
while (bonPren !== saisie && nombre++ < 5) {
    alert("ce n'est pas le bon prenom");
    saisie = prompt("entrez un autre prenom");
}


//La boucle do while.l'utilisation des boucles do while n'est pas très fréquente.

var bonPr = "gael";
var nombre = 0;
do {
    var saisie = prompt("entrez prenom li76");
    if (saisie !== bonPr) {
        alert("ce n'est pas le bon prenom !");        
    }
} while (bonPr !== saisie && ++nombre < 5);
    alert("c est bon");

//La boucle for
//la boucle conçue pour l'incrémentation.
var preNom = "gael";
var autrePrenom = prompt("entrez prenom lig 86");
for ( i = 0; i < 5; i++){ 

        if (autrePrenom !== preNom) {
            alert("ce n'est pas le bon prenom !");
            autrePrenom++;
        } else if (autrePrenom === preNom) {
            alert("c est le bon prenom");
            break;
        }
        
}

var i = 50*10;
var somme = 0;
var multiplication = 1;
var machin = true;
while (i++ < 10 && machin === true){
    somme += 30;
    multiplication *= somme;    
}



var i = 0;
var somme = 0;
var multiplication = 1;
somme += 30;
multiplication *= somme;
while (i++ < 9 && machin === true){
    somme += 30;
    multiplication *= somme;    
}

*/

const meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
  case "soleil":
    console.log("Sortez en t-shirt.");
    break;
  case "vent":
    console.log("Sortez en pull.");
    break;
  case "pluie":
    console.log("Sortez en blouson.");
    break;
  case "neige":
    console.log("Restez au chaud à la maison.");
    break;
  default:
    console.log("Je n'ai pas compris !");
}






