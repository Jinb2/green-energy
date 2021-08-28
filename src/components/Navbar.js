import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';


const Navbar = () =>{

    return(
        <nav className="navbar  ">
             <ul>
             <li><Link to="/">Home</Link></li>
               <li><Link to="/help">Ways to Help</Link></li>
               <li><Link to="/green">A Green Look</Link></li>
               <li><Link to="/news">News</Link></li>
               <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;