import React from 'react'
import './Mainpage.css'

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
            <div className="namesection">Welcome to DD Technologies</div>
            <div className="loginpage"></div>
        </div>
    </div>
  )
}

export default Mainpage