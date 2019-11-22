const path = require('path')
const Post = require("../database/models/Article")

module.exports = (req, res) => {

    const {
        image
    } = req.files

    const uploadFile = path.resolve(__dirname, '..', 'public/ressources/images/vins', image.name);

    image.mv(uploadFile, (error) => {
        Post.create({
            ...req.body,
            image: `/ressources/images/vins/${image.name}`
        }, (error, post) => {
            res.redirect("/catalogue")
        })
    })
}