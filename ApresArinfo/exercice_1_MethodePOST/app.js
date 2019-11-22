const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();


//Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


//Mongoose connect
mongoose.connect('mongodb://localhost:27017/exercice');

//CONTROLLEURS
const formulaireGetController = require("./controlleurs/formulaireGetControlleur");
const formulairePostController = require("./controlleurs/formulairePostControlleur");
const homePage = require("./controlleurs/homePage");



//ROUTE GENERALES HANDLEBARS
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//ROUTE POUR /resources/css/style.css
app.use(express.static('public'));




// Route MVC
app.get("/", homePage);
app.get("/formulaire", formulaireGetController);
app.post("/formulaire", formulairePostController);













app.listen(3500, function () {
    console.log("mon serveur tourne sur le port 3500")
})