import React from 'react'
import "../style/components/Sidebar.css"
function Siderbar() {
    return (
        <div className="sidebar">

            <div className="sidebar_containertop">
                <h3 className="category_heading">Category</h3>
                <div className="sidebar_category_btns">
                    <button className="categroy_btn">Software</button>
                    <button className="categroy_btn">Technology</button>
                    <button className="categroy_btn">LifeStyle</button>
                    <button className="categroy_btn">Shopping</button>
                    <button className="categroy_btn">Food</button>
                </div>
            </div>

            <div className="sidebarcontainer_bottom">
                <h3 className="category_heading">Popular</h3>
                <div className="sidebarcontainer_bottom_content">
                    <img src="/assets/popular-post/m-blog-2.jpg" alt="" className="content_img" />
                    <h3 className="content_title">Lorem ipsum dolor sit amet.</h3>
                    <div className="content_btn">Go to Post</div>
                </div>

                <div className="sidebarcontainer_bottom_content">
                    <img src="/assets/popular-post/m-blog-2.jpg" alt="" className="content_img" />
                    <h3 className="content_title">Lorem ipsum dolor sit amet.</h3>
                    <div className="content_btn">Go to Post</div>
                </div>

                <div className="sidebarcontainer_bottom_content">
                    <img src="/assets/popular-post/m-blog-2.jpg" alt="" className="content_img" />
                    <h3 className="content_title">Lorem ipsum dolor sit amet.</h3>
                    <div className="content_btn">Go to Post</div>
                </div>
            </div>

        </div>


    )
}

export default Siderbar
