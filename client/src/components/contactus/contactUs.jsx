import Map from './map';
import "./contactus.css";

const ContactUs = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div className="contents">
            <div className="home-banner">
                <div className="img-container">
                    <img src={require(`../../images/contactus.jpg`)} className="banner-img" alt="Home" />
                </div>
            </div>
            <div id="contactus-div">
                <div id="contactus-content-div">
                    <h1 className="title">Visit us at New West!</h1>
                    <div className="content-p">
                        <div className="contactus-item-div">
                            Address:
                            <ul className="list">
                                <li>700 Royal Ave, New Westminster, BC V3M 5Z5</li>
                            </ul>
                        </div>
                        <div className="contactus-item-div">
                            Tel:
                            <ul className="list">
                                <li>778-987-1234</li>
                            </ul></div>
                        <div className="contactus-item-div">
                            Email:
                            <ul className="list">
                                <li>cs@hkcarltd.com</li>
                            </ul></div>
                        <div className="contactus-item-div">
                            Office Hour:
                            <ul className="list">
                                <li>Monday - Friday:  9:00am - 8:00pm</li>
                                <li>Saturday, Sunday and Public Holiday:  10:00am - 6:00pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Map />
            </div>
        </div>
    );
}

export default ContactUs;