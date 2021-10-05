const Post = require('../models/Post')
const User = require("../models/Users")

// @desc  POST create new post
// @router POST /api/posts
// @access private


exports.createPost = async(req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
       
       const newPost = new Post({
           title: req.body.title,
           desc: req.body.desc,
           postimg: req.body.postimg,
           name: user.name,
           profilePic: user.profilePic,
           postedBy:user.id,
       });

       const post = await newPost.save();
       return res.status(200).json(post);
    //  console.log(user);
        
    } catch (error) {
        return res.status(500).json({
            error: "Server Error"
        });
    }

}

// @desc  PUT edit post
// @router PUT /api/posts
// @access private

// @desc  POST delete user account
// @router POST /api/users
// @access private

// exports.deletePost = async(req,res) => {
//     try {
  
//       const post = await Post.findById(req.params.id);
//       if(post){
//          await post.remove();
//          return res.json({
//           message:"Post deleted."
//         });
//       }
//       res.status(404).json("Post not found");
//          console.log(post);
//     } catch (error) {
//         return res.status(500).json({
//             error: "Server Error"
//         });
//     }
//   }
