
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import "../style/components/CreatePost.css"
function CreatePost() {
    return (
        <div className="create">
            <h1 className="create_title">Create a New Blog</h1>
            <img src="/assets/Blog-post/blog4.png" alt="" className="create_img" />
            <form action="" className="create_form">
                 <div className="create_form_group">
                     <label htmlFor="fileInput">
                       <AddIcon  className="create_icon" />
                     </label>
                     <input type="file" id="fileInput" style={{display: "none"}} />
                     <input type="text" placeholder="Title" className="create_input" autoFocus={true} />
                 </div>
                 <div className="create_form_group">
                     <textarea placeholder="Description..."   className="create_input create_text"></textarea>
                 </div>
                 <button className="create_submit">
                     Publish
                 </button>
            </form>
        </div>
    )
}

export default CreatePost
