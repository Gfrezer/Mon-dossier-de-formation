/*La base de toute condition : les booléens
Les opérateurs de comparaison
== égal à
!= différent de
=== contenu et type égal à
!== contenu ou type différent de
> supérieur à
>= supérieur ou égal à
< inférieur à
<= inférieur ou égal à

//Les opérateurs logiques
Opérateur    Type de logique       Utilisation
   &&            ET              valeur1 && valeur2
   ||            OU              valeur1 || valeur2
    !           NON                   !valeur

//EXEMPLES*/
var a, b, c;

a = 8 > 2; // false
b = 8 < 2; // true
c = a && b; // false
console.log(a, b, c);


/*La condition « if else ou structures conditionnelles.
if veut dire si;

L'indentation:
if (  condition  ) {
    // Du code…
} else {
    // Du code…
}*/


if (true === true) { // Cette condition renvoie « true », le code est donc exécuté
    alert('La condition est bien vérifiée.');
}
//la fonction confirm permet le choix de: ok=true , annuler=false ,qui ouvre ou pas la boite alert.
if (confirm("c'est moi qui ecris"));
alert("c est bon");

//La structure avec if pour dire si et else pour dire « sinon »:
if (confirm("c'est moi qui ecris alors je tape sur ok")) {
    alert("c est bon");
} else { //si je tape sur annuler
    alert("ce n est pas moi qui ecris")
}



//La structure avec if et else pour dire « sinon et else if pour dire sinon si»:

if (confirm("c'est moi qui ecris alors je tape sur ok")) {
    alert("c est bon");
} else if (true === false) {
    alert("cela ne peux pas s afficher car cele sera toujours egale = faux.");
} else { //si je tape sur annuler
    alert("ce n est pas moi qui ecris")
}

//La condition « switch »
//permet d aller directement a la bonne case sans passer par toutes les autres

//exemple
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));
switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
        break;
    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
        break;
    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
        break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
        break;
}


//Les ternaires, pour raccourcire les lignes de code.

var startMessage = 'Votre catégorie : ';
var endMessage;
var adult = confirm('Êtes-vous majeur ?');

if (adult) { //si ok alors true.
    endMessage = '18+';
} else { //si annuler alors false.
    endMessage = '-18';

    //ternaires: endMessage = adult ? "18" : "-18";
}
alert(startMessage + endMessage);



var age = parseInt(prompt('Quel est votre âge ?')); // Ne pas oublier : il faut "parser" (cela consiste à analyser) la valeur renvoyée par prompt() pour avoir un nombre !
if (age <= 0) { // Il faut bien penser au fait que l'utilisateur peut rentrer un âge négatif
    alert("Oh vraiment ? Vous avez moins d'un an ? C'est pas très crédible =p");
} else if (age <= 18) {
    alert("Vous n'êtes pas encore majeur.");
} else if (age <= 50) {
    alert('Vous êtes majeur mais pas encore senior.');
} else if (age <= 60) {
    alert('Vous êtes senior mais pas encore retraité.');
} else if (age <= 120) {
    alert('Vous êtes retraité, profitez de votre temps libre !');
} else if (age > 120) { // Ne pas oublier les plus de 120 ans, ils n'existent probablement pas mais on le met dans le doute


    alert("Plus de 120 ans ?!! C'est possible ça ?!");


} else { // Si prompt() contient autre chose que les intervalles de nombres ci-dessus alors l'utilisateur a écrit n'importe quoi


    alert("Vous n'avez pas entré d'âge !");


}
