import React from 'react'
import './Mainpage.css'
import Login from './Login'

const Mainpage = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">DD Tech</div>
            <div className="minnav">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="maincontainer">
            <div className="namesection"><h1>DD Group of Technologies</h1>
            <p>Inovation begins here......</p></div>
            <div className="loginpage">
                  <Login/>
            </div>
        </div>
    </div>
  )
}

export default Mainpage