const article = require('../database/models/Article'),
    path = require('path')


module.exports = (req, res) => {

    let query = {
        _id: req.body.articleId
    }
    const {
        image
    } = req.files
    const uploadFile = path.resolve(__dirname, '..', 'public/ressources/images/vins', image.name);
    image.mv(uploadFile, (error) => {
        article.findOneAndUpdate(query, {
            ...req.body,
            image: `/ressources/images/vins/${image.name}`
        }, function (error, post) {
            if (error) {
                console.log(error);
                return;
            } else {
                res.redirect('/catalogue');
            }
        });
    })
}