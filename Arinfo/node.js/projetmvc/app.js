const express = require("express");
const exphbs = require('express-handlebars');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

//controller
//article
const articleAddcontroller = require("./controllers/articleAdd")
const articleSinglecontroller = require("./controllers/articleSingle")
const articlePostcontroller = require("./controllers/articlePost")
const homepage = require("./controllers/homepage")
const userRegister = require("./controllers/userRegister")


//user
const userCreate = require("./controllers/userCreate")
const userRegister = require("./controllers/userRegister")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(fileupload())
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true
});
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);
app.use(express.static('public'));

//route
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//middleware
const articleValidPost = require("./middleware/articleValidPost")
app.use("/articles/post", articleValidPost)


app.get("/", homepage)


//articles
app.get("/articles/add", articleAddcontroller)
app.get("/articles/id", articleSinglecontroller)
app.post("/articles/post", articlePostcontroller)


//contact
app.get("/contact", function (req, res) {
    res.render("contact")
})


//users
app.get("/user/create", userCreate)
app.post("/user/register", userRegister)




app.listen(3000, function () {
    console.log("le serveur sur port3000");

})