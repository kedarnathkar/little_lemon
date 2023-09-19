import {useState} from "react"
import { Link } from "react-router-dom";
import React from "react";
import logo from "../components/img/Logo.png"
import "../CSS/Nav.css"
import {HiMenuAlt4, HiX} from 'react-icons/hi'

const Nav = () => {
  // 
    const [toggle, setToggle] = useState(false);
    return (
    <nav>
      <div className="app_navbar">
        <div className="app_navbar_logo">
        <img src={logo} alt="Little lemonlogo"/>
        </div>
        <ul className="app_navbar-links">
        <li ><Link className="links" to="/">Home</Link></li>
        <li ><Link className="links" to="/About">About</Link></li>
        <li ><Link className="links" to="/Menu">Menu</Link></li>
        <li ><Link className="links" to="/Reservation">Reservation</Link></li>
        <li ><Link className="links" to="/online">Online</Link></li>
        <li ><Link className="links" to="/login">Login</Link></li>
        </ul>
      </div>
      {/* Mobile formate */}
      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={()=>{setToggle(true)}} className="app_navbar-hamburger" />
        {toggle &&
        (<div>
            <HiX onClick={()=>{setToggle(false)}} className="app_navebar-cancel" />
            <Link className="link" to={"/"} onClick={()=>{setToggle(false)}}>Home</Link>
            <Link className="link" to={"/About"} onClick={()=>{setToggle(false)}}>About</Link>
            <Link className="link" to={"/Menu"} onClick={()=>{setToggle(false)}}>Menu</Link>
            <Link className="link" to={"/Reservation"} onClick={()=>{setToggle(false)}}>Reservation</Link>
            <Link className="link" to={"/online"} onClick={()=>{setToggle(false)}}>Online</Link>
            <Link className="link" to={"/login"} onClick={()=>{setToggle(false)}}>Login</Link>
        </div>)}
      </div>
    </nav>
    );
};

export default Nav;