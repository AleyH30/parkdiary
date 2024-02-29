import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
                <nav>
                    <ul>
                        <Link style={{textDecoration: 'none'}} to='/'><li className="logo-btn">Park Diary</li></Link>
                        <Link style={{textDecoration: 'none'}} to='/About'><li className="about-btn">About</li></Link>
                    </ul>
                </nav>  
            </div>
    )
}

export default Navbar