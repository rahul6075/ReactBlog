import React from 'react'
import "../style/pages/LoginScreen.css"
function SignupScreen() {
    return (
        <div className="login">
            <div className="login_wraper">
                <h1 className="login_title">SignUp</h1>
                <form>
                    <div className="form_details">
                        <label >Username</label>
                        <input type="text" placeholder="Enter Your Name" className="form_input" />
                        <label >Email</label>
                        <input type="email" placeholder="Email" className="form_input" />
                        <label >Password</label>
                        <input type="password" placeholder="Password" className="form_input" autoComplete="false" />
                        <button className="profile_submit">
                            SignUp
                        </button>
                        <span className="link">Already Signup? <a href="/login">Login</a></span>


                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignupScreen
