import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react'
import "../style/components/Header.css";
import {motion} from "framer-motion"
import {fadeInUp} from "../animation";


function Header() {
    return (
            <motion.div variants={fadeInUp} className="header">
                <div className="header_content">
                    <div className="header_arrow">
                        <div className="wrapper">
                            <div className="header_title">
                                <h4>Explore The World</h4>
                            </div>
                            <div className="header_desc">
                                <p>Amazing Places on Earth...</p>
                            </div>
                            <button className="header_btn">Explore</button>

                        </div>
                        <div className="arrow_icon">
                            <ArrowForward className="arrow" />
                            <ArrowBack className="arrow" />
                        </div>

                    </div>
                </div>
            </motion.div>
            


        
    )
}

export default Header
