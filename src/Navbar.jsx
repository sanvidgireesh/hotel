import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/rooms" className="nav-link">Rooms and Rates</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/activities" className="nav-link">Activities</NavLink>
            </li>
            <li className="nav-item">  
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">  
                <NavLink to="/form" className="nav-link">Form</NavLink>
            </li>
        </ul>
        </>
    );
}
export default Navbar;