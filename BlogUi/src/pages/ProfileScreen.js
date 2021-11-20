
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import React from 'react'
import "../style/pages/ProfileScreen.css"
function ProfileScreen() {
    return (
        <div className="profile">
            <div className="profile_wrapper">
                <div className="profile_title">
                    <span className="profile_title_update">
                        Update Account
                    </span>
                    <span className="profile_title_disable">
                        Disable Account
                    </span>
                </div>
                <div className="profile_form">
                    <form  >
                        <label>Profile Picture</label>
                        <div className="profile_img">
                            <img src="/assets/instagram/thumb-card4.png" alt="" className="img" />
                            <label htmlFor="fileInput" className="new_img">
                                <AccountCircleRoundedIcon /><span>Upload</span>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                            
                        </div>
                        <div className="form_details">
                        <label >Username</label>
                            <input type="text" placeholder="Enter Your Name" className="form_input" />
                            <label >Email</label>
                            <input type="email" placeholder="Email"className="form_input" />
                            <label >Password</label>
                            <input type="password" placeholder="Password" className="form_input"autoComplete="false" />
                            <button className="profile_submit">
                                Update
                            </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
