import { ArrowForward, Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import "../style/components/Footer.css"
function Footer() {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="about">
                    <h3 className="heading">AboutUs</h3>
                    <span className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem corporis cupiditate explicabo dolore sunt, id cumque consectetur
                        accusantium iure excepturi ab maxime natus nam!
                    </span>
                </div>
                <div className="news_update">
                    <h3 className="heading">Newsletter</h3>
                    <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <div className="section">
                        <input type="email" placeholder="Email" className="input" />
                        <ArrowForward />
                    </div>
                </div>
                <div className="socialmedia">
                <h3 className="heading">FollowUs</h3>
                <span className="desc">Lorem ipsum dolor .</span>
                <div className="social_icon">
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <YouTube/>
                </div>
                </div>
            </div>
            <span className="trademark">
            Copyright ©2021 All rights reserved | made by <a href="https://www.youtube.com/channel/UCWM4Lk3LU2WOlMRrre4E-ow"><YouTube className="youtube"/> </a>MERN STRIKER
            </span>
        </div>
    )
}

export default Footer
