const post = require('../database/models/Article');
const user = require('../database/models/user')


module.exports = async (req, res) => {
    const posts = await post.find({}).sort({
        _id: -1
    });
    const users = await user.findById(req.session.userId);
    console.log(users);

    // console.log(posts);
    // console.log(req.session);

    res.render("catalogue", {
            posts,
            users
        }
        // , {
        //     users
        // }
    )
}