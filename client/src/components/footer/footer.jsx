import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-details">
                <div id="follow-us" className="footer-details-block">
                <h5 className="footer-title">Follow Us</h5>
                <div id="follow-us-icon-div">
                    <FaFacebook size={28}/>
                    <FaTwitter size={28}/>
                    <FaYoutube size={28}/>
                    <FaInstagram size={28}/>
                    <FaLinkedin size={28}/>
                </div>
                </div>
                <div id="site-map" className="footer-details-block">
                    <h5 className="footer-title">Site Map</h5>
                    <Link className="footer-link" to="/">Home</Link>
                    <br></br>
                    <Link className="footer-link" to="/products/sedan">Sedan</Link>
                    <br></br>
                    <Link className="footer-link" to="/products/suv">SUV</Link>
                    <br></br>
                    <Link className="footer-link" to="/aboutus">About Us</Link>
                    <br></br>
                    <Link className="footer-link" to="/contactus">Contact Us</Link>
                    <br></br>
                </div>
                <div id="contacts" className="footer-details-block">
                    <h5 className="footer-title">Contact Us</h5>
                    <span>Address: 700 Royal Ave, New Westminster, BC V3M 5Z5</span><br></br>
                    <span>Tel: 778-987-1234</span><br></br>
                    <span>Email: cs@hkcarltd.com</span><br></br>
                    <span>Office Hour:</span>
                    <ul id="office-hour-list">
                        <li>Monday - Friday: 9:00am - 8:00pm</li>
                        <li>Saturday, Sunday and Public Holiday:  10:00am - 6:00pm</li>
                    </ul>
                </div>
            </div>
            <p id="footer-content">Copyright &copy; Herbert Lam & Karl Chau. All content in this website is unreal. All rights reserved.</p>
        </div>
    );
}
 
export default Footer;