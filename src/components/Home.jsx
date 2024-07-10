import React, { useState } from 'react'
import "../assets/home.css"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Home() {

    const [toggle, setToggle] = useState(true)
    const [showForm, setShowForm] = useState(false)
  return (
    <>
        <div className="home-container">
            <div className="navigate-box" style={showForm?{boxShadow:'none'}:{boxShadow:'0 0 20px black'}}>
                <div className="profile">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    <div className="profile-details">
                        <h4 className='name'>Hi Reader,</h4>
                        <p className='tagline'>Here’s your News!</p>
                    </div>
                </div>
                <div className="toggle" style={showForm ?{display:'none'}:{display:'block'} }>
                    <h3>View Toggle</h3>
                    <div className="toggle-btns">
                    <Link to="/cards">
                        <i className="toggle-icon1 fa-regular fa-newspaper"
                        style={toggle ? {backgroundColor: "#94E9C5"} : {backgroundColor: "#D7DFE7"}}
                        onClick={() => setToggle(true)}></i>
                    </Link>
                    <Link to="/slides">
                        <i className="toggle-icon2 fa-solid fa-list-ul"
                        style={toggle ? {backgroundColor: "#D7DFE7"} : {backgroundColor: "#94E9C5"}}
                        onClick={() => setToggle(false)}></i>
                    </Link>
                    </div>
                </div>
                <div className="feedback">
                    <h3>Have a Feedback?</h3>
                    {
                    showForm ?
                    <Link to="/cards">
                        <p className="feedback-para"
                         style={showForm ? {backgroundColor:'#EAA4A7'}: {backgroundColor:'#94E9C5'}} onClick={()=> setShowForm(!showForm)} >We’re Listening!</p>
                    </Link>
                    :
                    <Link to="/form">
                        <p className="feedback-para"
                         style={showForm ? {backgroundColor:'#EAA4A7'}: {backgroundColor:'#94E9C5'}} onClick={()=> setShowForm(!showForm)} >We’re Listening!</p>
                    </Link>
                    }
                </div>
            </div>
            <div className="show-box">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Home