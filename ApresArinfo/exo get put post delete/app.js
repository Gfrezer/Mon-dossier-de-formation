const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const methodeOverride = require("method-override")

const app = express();

//methode override
app.use(methodeOverride("_method"));

//handlebars route
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: "hbs"
}));
app.set("view engine", "hbs")

//Body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));



//MongoDB
mongoose.connect("mongodb://localhost:27017/GetPost", {
    useNewUrlParser: true
})

const productSchema = {
    title: String,
    content: String,
    price: Number

};
const Product = mongoose.model("product",
    productSchema)



//Routes

//Methode GET
app.route("/")
    .get((req, res) => {
        Product.find(function (error, prod) {
            if (!error) {
                res.render("index", {
                    product: prod
                })
            } else {
                res.render(error)
            }
        })
    })

    //Methode POST
    .post((req, res) => {
        const newProduct = new Product({
            title: req.body.title,
            content: req.body.content,
            price: req.body.price

        });
        newProduct.save(function (error) {
            if (!error) {
                res.send("sauvegarde ok")
            } else {
                res.render(error)
            }
        })
    })



    //Delete
    .delete(function (req, res) {
        Product.deleteMany(function (error) {
            if (!error) {
                res.send("tous effacer")
            } else {
                res.send(error)
            }
        })
    })




//Routes avec l'ID
// app.route("/:title")
app.route('/:id')
    .get(function (req, res) {
        Product.findOne({
                _id: req.params.id
                // title: req.params.title
            },
            function (error, produit) {
                if (!error) {
                    res.render("edition", {
                        _id: produit.id,
                        title: produit.title,
                        content: produit.content,
                        price: produit.price
                    })
                } else {
                    res.send(error)
                }
            }
        )
    })

    .put(function (req, res) {
        Product.update(
            //condition
            {
                _id: req.params.id
            },
            //update
            {
                title: req.body.title,
                content: req.body.content,
                price: req.body.price
            },
            //option
            {
                multi: true
            },

            //exec
            function (error) {
                if (!error) {
                    res.send("Update OK !!!")
                } else {
                    res.send(error)
                }
            }
        )
    })

    //Delete one
    .delete(function (req, res) {
        Product.deleteOne({
                _id: req.params.id
            },
            function (error) {
                if (!error) {
                    res.send("effacer produit")
                } else {
                    res.send(error)
                }
            }

        )
    })


app.listen(3020, function () {
    console.log("le serveur tourne sur le port 3020");
});