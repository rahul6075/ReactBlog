import React from 'react'
import "../style/pages/PostScreen.css";
import SinglePost from '../components/SinglePost'

import Sidebar from "../components/Sidebar"

function PostScreen() {
    return (
        <div className="postScreen">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default PostScreen
