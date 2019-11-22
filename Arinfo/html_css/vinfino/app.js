 // DEPENDENCIES
 const express = require("express");
 const exphbs = require("express-handlebars");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const fileupload = require("express-fileupload");
 const path = require('path');
 const bcrypt = require('bcrypt');
 const expressSession = require('express-session');
 const MongoStore = require('connect-mongo');
 const connectFlash = require('connect-flash')

 //controller
 //article
 const articlePostController = require('./controllers/articlePost');
 const articleAddController = require('./controllers/articleAdd');
 const articleEditController = require('./controllers/articleEdit');
 const articlePage = require('./controllers/articlePage');
 const articleDelete = require('./controllers/articleDelete')


 //user
 const userCreate = ("./controllers/userCreate"),
     userRegister = require('./controllers/userRegister'),
     userLogin = require('./controllers/userLogin'),
     userLoginAuth = require('./controllers/userLoginAuth'),
     userLogout = require('./controllers/userLogout'),
     auth = require('./middleware/auth'),
     redirectAuthSuccess = require('./middleware/redirectAuthSucces')


 const app = express();

 // CONNECTION MONGODB
 // const db =require ('./config/keys.js').MongoURI

 // MONGOOSE
 mongoose.set('useCreateIndex', true)
 mongoose.connect("mongodb://localhost:27017/vinfino", {
     useNewUrlParser: true
 });
 // mongoose    
 //     .connect(db, {useNewUrlParser: true}) // connection avec mongodb localhost et heroku
 //     .then(() => console.log('Connect MongoDB Cloud'))// renvoi qu'il est connecté a mongodb cloud
 //     .catch(err => console.log(err));

 // CONNECT FLASH
 app.use(connectFlash())



 const mongoStore = MongoStore(expressSession)
 app.use(expressSession({ // utilise express-session
     secret: 'securite', // code secret 
     name: 'biscuit', // cookie
     saveUninitialized: true,
     resave: false,

     store: new mongoStore({
         mongooseConnection: mongoose.connection
     })
 }))

 // BODY PARSER
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({
     extended: true
 }))

 app.use(fileupload());
 //POST

 const Post = require("./database/models/Article")
 app.use(express.static("public"));
 app.use('*', (req, res, next) => {
     res.locals.user = req.session.userID;
     next()
 })

 // Handlebar
 app.engine("handlebars", exphbs({
     defaultLayout: "main"
 }));

 app.set("view engine", "handlebars");

 //middleware
 const articleValidPost = require('./middleware/articleValidPost')

 app.use("/articles/post", articleValidPost)
 // app.use("/articles/add", auth)

 // ===============================
 // ROUTES
 // ===============================

 // GET
 app.get("/", (req, res) => {
     res.render("index")
 })
 // ARTICLES

 // articles/add
 app.get("/articles/add", auth, articleAddController)
 //catalogue
 app.get("/catalogue", articlePage)
 // POST
 // articles
 app.post("/articles/post", articleValidPost, articlePostController)
 //users
 app.get("/user/create", (req, res) => {
     res.render('register')
 })

 // userCreate

 app.post('/user/register', redirectAuthSuccess, userRegister)
 app.get('/user/login', redirectAuthSuccess, userLogin)
 app.post('/user/loginAuth', redirectAuthSuccess, userLoginAuth)
 app.get('/user/logout', userLogout)
 // ARTICLE  DELETE
 app.get('/delete/article/:id', articleDelete)
 // ARTICLE EDIT
 app.get('/articleEdit/:id', articleEditController)
 app.post("/articleEditPost/:id", function (req, res) {
     const Article = require('./database/models/Article');
     const path = require('path')
     let query = {
         id: req.body.articleId
     }
     const {
         image
     } = req.files
     const uploadFile = path.resolve(__dirname, 'public/ressources/images/vins', image.name);

     image.mv(uploadFile, (error) => {
         Article.findOneAndUpdate(query, {
             ...req.body,
             image: `/ressources/images/vins/${image.name}`
         }, function (error, post) {
             if (error) {
                 console.log(error);
                 return;
             } else {
                 // console.log("C'est OK");
                 res.redirect('/catalogue');
             }
         });
     })
 });



 app.listen(3050, function () {
     console.log("le serveur tourne sur le port 3050")
 })