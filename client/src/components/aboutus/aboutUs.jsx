import "./aboutus.css";

const AboutUs = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div className="contents">
            <div className="home-banner">
                <div className="img-container">
                    <img src={require(`../../images/aboutus.jpg`)} className="banner-img" alt="Home" />
                </div>
            </div>
            <div id="aboutus-content-div">
                <h1 className="title">HK Car Limited - Fabulous Driving Experience!</h1>
                <p className="content-p">
                    HK Car Limited was established in 1997.
                    "H" and "K" are originated from the initials of our co-founders, Herbert and Karl.
                    "HK" also refers to their original living city, Hong Kong!
                </p>
                <p className="content-p">
                    We believe that high performance automobile always provides excellent driving experience to every driver.
                    Every HK car is made with the latest technologies and high-standard parts.
                    This is the car you will love. This is the fabulous driving experience you will have.
                </p>
                <div id="cofounders">
                    <div className="cofounder">
                        <img src={require(`../../images/herbert.jpg`)} className="banner-img" alt="Home" />
                        <figcaption>Herbert Lam</figcaption>
                    </div>
                    <div className="cofounder">
                        <img src={require(`../../images/karl.jpg`)} className="banner-img" alt="Home" />
                        <figcaption>Karl Chau</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;