const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    postimg:{
        type:String,
         default:"",
    },
    profilePic:{
      type:String,
       default:"",
  },
    likes: [
      {
        likedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
      },
    ],
    comments: [
      {
        commentedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        desc: {
          type: String,
          required: true,
        },
        name: {
          type: String,
        },
        profilePic:{
            type:String,
             default:"",
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Post", PostSchema);