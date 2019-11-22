/*
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "bic",
};
for (var descri in stylo){
console.log(stylo[descri]);
}

function dog() {    
    dog.type = "epagneul";
    dog.couleur = "gris";
    dog.age = "4 ans";  
}

var lesDogs = new dog();
for(var  property in dog){
console.log(dog[property]);
}

function StyloGenerique (type, couleur, marque){
    this.type = type;
    this.couleur = couleur;
    this.marque = marque;
}
var bic = new StyloGenerique("plume", "rouge", "bic");
var wortedarm = new StyloGenerique("bille", "vert", "worterdam");

console.log(bic instanceof StyloGenerique);


var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];


alert(myArray);



var chiens = {}
    chiens.nom = "medor",
    chiens.race = "cocker";
    chiens.taille  = "50cm";
    chiens.aboie = function(argument){}
        
    

function decrire(chiens) {
    var desrcription = this.nom + " est un " +
        this.race + " mesurant " + " cm";
        return desrcription;
     }
   
}

console.log(decrire(chiens));
*/

//var nom = "medor ", race = "berger", taille = 120;
//concatener = nom + race + taille;
//alert(concatener);
//
//
//var a = "trureu", b = 12, c = "3";
//console.log(typeof a);
//console.log(typeof c);
//c = parseInt(c);
//console.log(typeof c);
//d = b + c;
//console.log(d);


var app = new Vue({
    el: '#app',
    data: {

        fruits: [
            {
                nom: "laitue"
			},
            {
                nom: "carotte"
			},
            {
                nom: "ttttttttyrtyrtyrtyrthrtyrtrtyrtyomate"
			},
            {
                nom: "cacao"
			},
            {
                nom: "bassssssncgdfgdrdgdfgdfgsdfgane"
			},
            {
                nom: "pomme"
			},
            {
                nom: "kiwi"
			}
			]

    }
});
