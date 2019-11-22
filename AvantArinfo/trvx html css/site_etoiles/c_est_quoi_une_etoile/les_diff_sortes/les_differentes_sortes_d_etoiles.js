 /*document.addEventListener("DOMContentLoaded", function(event) {
    var monTableau = document.getElementById("tableau").rows;
    console.log(monTableau.length);
});
*/

 function ajouterLigne() {
     var tableau = document.getElementById("tableau_sortes");
     var ligne = tableau.insertRow(-1);
     
     var colonne1 = ligne.insertCell(0);
     colonne1.innerHTML += document.getElementById("rang").value;

     var colonne2 = ligne.insertCell(1);
     colonne2.innerHTML += document.getElementById("nom").value;

     var colonne3 = ligne.insertCell(2);
     colonne3.innerHTML += document.getElementById("constellation").value;

     var colonne4 = ligne.insertCell(3);
     colonne4.innerHTML += document.getElementById("distance").value;

     var colonne5 = ligne.insertCell(4);
     colonne5.innerHTML += document.getElementById("luminosite").value;

     var colonne6 = ligne.insertCell(5);
     colonne6.innerHTML += document.getElementById("masse").value;

     var colonne7 = ligne.insertCell(6);
     colonne7.innerHTML += document.getElementById("diametre").value;
     
 }

