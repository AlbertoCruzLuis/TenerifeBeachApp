import React from 'react'
import './styles/Navbar.css'
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
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
}