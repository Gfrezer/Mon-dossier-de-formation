let boutonXHRList = document.querySelectorAll(".boutonXHR");
boutonXHRList.forEach(function (boutonXHR) {
    boutonXHR.addEventListener('click', function (event) {
        let bouton = this;
        let tr = bouton.parentElement.parentElement;
        let idPourLeServeur = tr.className;
        var requete = new XMLHttpRequest();
        requete.onload = function () {
            let res = JSON.parse(this.responseText);
            console.log(res);
            if (res == 'ok') {
                tr.remove();
            }
        };

        // requete.open("get", "http://localhost:3300/contactJsonRemove?id=" + idPourLeServeur, true); //app.get("/contactJsonRemove")       // req.params.nom
        requete.open("get", "http://localhost:3300/contactJsonRemove/" + idPourLeServeur, true); //app.get("/contactJsonRemove/:nom") // req.params.nom
        // requete.open("post", "http://localhost:3300/contactJsonRemove" + nomPourLeServeur, true)                               //app.post("/contactJsonRemove")     // req.body.nom
        // requete.open("delete", "http://localhost:3300/contactJsonRemove/" + nomPourLeServeur, true)
        // let params = "nom=" + nomPourLeServeur;
        requete.send();
    })
})