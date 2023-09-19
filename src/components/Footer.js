import React from "react";
import {Link} from "react-router-dom"
import logo from "../components/img/footer_logo.png"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import "../CSS/footer.css";


const Footer = () => {
    return (
        <>
        <div className="app_footer">
        <div className="app_footer-section">
        <div className="app_footer-items">
            <div className="app_footer-logo"><img src={logo} alt="Little lemonlogo" style={{ height:"150px", width: "100px"}}/></div>
        <div className="app_links">
         <ul>
         <li><Link className="app_links-items" to="/Home">HOME</Link></li>
         <li><Link className="app_links-items" to="#/About">ABOUT</Link></li>
         <li><Link className="app_links-items" to="#/Menu">MENU</Link></li>
         <li><Link className="app_links-items" to="#/Reservation">RESERVATION</Link></li>
         <li><Link className="app_links-items" to="#/online">ONLINE</Link></li>
         <li><Link className="app_links-items" to="#/login">LOGIN</Link></li>
         </ul>
         </div>

        <div className="app_social-icons">
            <ul>
            <li><FaFacebook /> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaInstagram /> instagram</li>
            <li><FaPinterest /> pinterest</li>
            <li><FaYoutube /> Youtube</li>
        </ul>
        </div>
        <div className="app_online">

            <p>Address
            <br/> Phone <br/>
            Email
            </p>
        </div>

        <hr></hr>

            <div className="app_footer-below">
                <div className="app_footer-copywrite">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All rights reserved.
                    </p>
                </div>
             <div className="app_footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>security</p></div></a>
             </div>
            </div>
        </div>
       </div>
    </div>
        </>
    )
};

export default Footer;
