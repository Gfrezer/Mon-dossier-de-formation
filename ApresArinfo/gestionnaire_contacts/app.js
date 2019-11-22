const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const expressSession = require("express-session")
const flash = require("req-flash")
const cookieParser = require('cookie-parser');


const app = express();

app.use(cookieParser());
app.use(expressSession({
    secret: "Shh, its a secret!"
}));
app.use(flash());
//Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"));

//CONTROLLEURS
const formulaireGetController = require("./controlleurs/formulaireGetController");
const tableauGetController = require("./controlleurs/tableauGetController");
const contactPostController = require("./controlleurs/contactPostController");
const contactDeleteController = require("./controlleurs/contactDeleteController");
const contactDeleteNomController = require("./controlleurs/contactDeleteNomController");
const gestionnaireJSONController = require("./controlleurs/gestionnaireJSONController");
const contactJsonRemoveController = require("./controlleurs/contactJsonRemoveController");
const tableauJSONGetController = require("./controlleurs/tableauJSONGetController");
//ROUTE GENERALES HANDLEBARS
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//ROUTE MVC
app.get("/formulaire", formulaireGetController);
app.get("/tableau", tableauGetController);
app.post("/formulaire", contactPostController);
app.get("/delete/:nom", contactDeleteNomController);
app.post("/delete", contactDeleteController);
app.get("/gestionnaireJSON", gestionnaireJSONController);
app.get("/contactJsonRemove/:id", contactJsonRemoveController);
app.get("/tableauJSON", tableauJSONGetController);


app.listen(3300, function () {
    console.log("mon serveur tourne sur le port 3300")
})