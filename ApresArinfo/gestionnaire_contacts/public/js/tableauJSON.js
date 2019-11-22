window.onload = function () {
    var requete = new XMLHttpRequest();
    requete.onload = function () {
        let gestionnaire = JSON.parse(this.responseText);
        console.log(gestionnaire);
        let tableau = document.querySelector("table");
        console.log(tableau);
        let i = 0;
        gestionnaire.contacts.forEach(contact => {
            let tr = document.createElement("tr");

            let th = document.createElement("th");
            let thContent = document.createTextNode(++i);
            th.appendChild(thContent);


            let tdNom = document.createElement("td");
            let tdNomContent = document.createTextNode(contact.nom);
            tdNom.appendChild(tdNomContent);


            let tdPrenom = document.createElement("td");
            let tdPrenomContent = document.createTextNode(contact.prenom);
            tdPrenom.appendChild(tdPrenomContent);

            let tdRegion = document.createElement("td");
            let tdRegionContent = document.createTextNode(contact.telephone.region);
            tdRegion.appendChild(tdRegionContent);

            let tdTelephone = document.createElement("td");
            let tdTelephoneContent = document.createTextNode(contact.telephone.numero);
            tdTelephone.appendChild(tdTelephoneContent);





            tr.appendChild(th)
            tr.appendChild(tdNom)
            tr.appendChild(tdPrenom)
            tr.appendChild(tdTelephone)
            tr.appendChild(tdRegion)
            tableau.tBodies[0].appendChild(tr);

        });


    };
    requete.open("get", "http://localhost:3300/gestionnaireJSON", true);
    requete.send();

}