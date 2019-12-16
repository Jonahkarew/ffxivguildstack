const { Posts } = require('../models');
const handle = require('../utils/promise-handler')

const postBlog = (req, res) => {
    console.log(req.body)

    const { postContent, postAuthor } = req.body;

    const newPost = new Posts({postContent, postAuthor})

    newPost.save(err => {
        if(err){
            console.log(err);
            res.status(500).json({
                succcess: false,
                message: "Error posting, please try again later."
            })
        }
        else{
            res.status(200).json({
                success: true,
                message: "Post successful."
            })
        }
    })
}

const getAllPosts = (req, res) => {
    let db = require('../models');
    db.Posts.find({

    }).then(function (retrievedPosts){
        res.json(retrievedPosts)
    }).catch(function(err){
        if(err){
            console.log(err)
        }
    })

}

module.exports = {
    postBlog,
    getAllPosts
}