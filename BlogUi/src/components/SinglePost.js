import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import "../style/components/SinglePost.css"
function SinglePost() {
    return (
        <div className="single_post">
            <div className="singlepost_wrapper">

                <img src="/assets/Blog-post/blog1.png" alt="" className="single_post_img" />
                <h1 className="single_post_title">Why should boys have all the fun? it's the women who are making india an alcohol-loving contry
                    <div className="single_post_edit">
                        <Edit className="post_icon" />
                        <Delete className="post_icon" />
                    </div>
                </h1>
                <div className="single_post_info">
                    <span className="post_author">Author: <b>Rahul Chaudhary</b></span>
                    <span className="post_date">1 hour ago</span>
                </div>
                <p className="single_post_desc">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Recusandae reiciendis
                    eligendi voluptate assumenda quo soluta
                    vel perspiciatis eos? Molestias sapiente
                    suscipit adipisci in esse ipsum animi
                    totam placeat, harum fugit maxime dolorem.
                    Esse, maxime vel?
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Recusandae reiciendis
                    eligendi voluptate assumenda quo soluta
                    vel perspiciatis eos? Molestias sapiente
                    suscipit adipisci in esse ipsum animi
                    totam placeat, harum fugit maxime dolorem.
                    Esse, maxime vel?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Recusandae reiciendis
                    eligendi voluptate assumenda quo soluta
                    vel perspiciatis eos? Molestias sapiente
                    suscipit adipisci in esse ipsum animi
                    totam placeat, harum fugit maxime dolorem.
                    Esse, maxime vel?
                </p>



            </div>
        </div>
    )
}

export default SinglePost

