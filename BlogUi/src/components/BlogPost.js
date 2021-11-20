import { ArrowForwardIos } from '@material-ui/icons';
import React from 'react'
import "../style/components/BlogPost.css";
import {Link} from "react-router-dom"
function BlogPost() {
    return (
        <div className="blog_container">
            <div className="blog_container_content">
                <div className="blog_post">
                    <img src="/assets/Blog-post/blog1.png" alt="" className="blog_post_img" />
                    <h3 className="blog_post_title">Why should boys have all the fun? it's the women who are making india an alcohol-loving contry</h3>
                    <p className="blog_post_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur modi mollitia placeat minus, iste repellendus at, sequi iusto nam consequuntur labore dolor magnam? Aut.</p>
                    <Link to="/post" className="link_style">
                    <button className="blog_post_btn">Read More <ArrowForwardIos /> </button>
                    </Link>
                    <hr className="blog_post_hr" />
                </div>
                
                <div className="blog_post">
                    <img src="/assets/Blog-post/blog2.png" alt="" className="blog_post_img" />
                    <h3 className="blog_post_title">Why should boys have all the fun? it's the women who are making india an alcohol-loving contry</h3>
                    <p className="blog_post_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur modi mollitia placeat minus, iste repellendus at, sequi iusto nam consequuntur labore dolor magnam? Aut.</p>
                    <Link to="/post" className="link_style">
                    <button className="blog_post_btn">Read More <ArrowForwardIos /> </button>
                    </Link>
                    <hr className="blog_post_hr" />
                </div>
                <div className="blog_post">
                    <img src="/assets/Blog-post/blog3.png" alt="" className="blog_post_img" />
                    <h3 className="blog_post_title">Why should boys have all the fun? it's the women who are making india an alcohol-loving contry</h3>
                    <p className="blog_post_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur modi mollitia placeat minus, iste repellendus at, sequi iusto nam consequuntur labore dolor magnam? Aut.</p>
                    <Link to="/post" className="link_style">
                    <button className="blog_post_btn">Read More <ArrowForwardIos /> </button>
                    </Link>
                    <hr className="blog_post_hr" />
                </div>
            </div>
            
        </div>
    )
}

export default BlogPost
