import { Fragment } from "react";
import BlogPost from "../components/BlogPost";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../style/pages/HomeScreen.css";
function HomeScreen() {
    return (
        <div className="homeScreen">
           <Fragment>
            {/* <Navbar/> */}
            <Header/>
            <Cards/>
            <div className="post_section">
              <BlogPost/>
              <Sidebar/>
            </div>
            <Footer/>
        </Fragment>
        </div>
        
    )
}

export default HomeScreen
