import { SearchOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import "../style/components/Navbar.css";

function Navbar() {
     const user = false;
    return (
        <div className="navbar">
            <div className="navbar_left">
                {/* <img src="" alt="Some" className="navbar_logo" /> */}
                <h3 className="navbar_logo">ReactBlog</h3>
            </div>
            <div className="navbar_center">
                <ul className="navbar_items_center">
                    <li className="navbar_item">
                    <Link to="/" className="link_style"> Home</Link>
                    </li>
                    <li className="navbar_item">
                    <Link to="/profile" className="link_style"> About</Link>
                    </li>
                    <li className="navbar_item">
                        Contact
                    </li>
                    {/* <Link to="/new-blog"> */}
                    <li className="navbar_item">
                       <Link to="/create-post" className="link_style"> Create</Link>
                    </li>
                    {/* </Link> */}
                    <li className="navbar_item">
                        Logout
                    </li>
                </ul>
            </div>
            <div className="navbar_right">
                { user ? (
                     <>
                      <Link to="/profile">
                      <img className="navbar_img" src="/assets/instagram/thumb-card3.png" alt="" />
                      </Link>
                      <SearchOutlined/>
                      </>
                ):(
                    <ul className="navbar_items">
                         <li className="navbar_item">
                         <Link to="/signup" className="link_style"> Signup</Link>
                    </li>
                    <li className="navbar_item">
                    <Link to="/login" className="link_style"> Login</Link>
                    </li>
                      </ul>
                )}
                
            </div>
        </div>
    )
}

export default Navbar

