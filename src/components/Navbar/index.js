import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-name">
                <Link to="/">
                    <span>Tenerife Beach App</span>
                </Link>
            </div>
            <div className="navbar-item">
                <Link to="/">
                    <span>Home</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;