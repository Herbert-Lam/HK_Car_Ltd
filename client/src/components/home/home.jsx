import CarType from "./carType";
import { Link } from 'react-router-dom'

const Home = () => {
  // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="contents">
      <div className="home-banner">
        <div className="img-container">
          <img src={require(`../../images/homeImg.jpg`)} className="banner-img" alt="Home" />
        </div>
      </div>
      <div id="sections">
        <Link className="car-type-link" to="/products/sedan">
          <CarType carType="Sedan" />
        </Link>
        <Link className="car-type-link" to="/products/suv">
          <CarType carType="SUV" />
        </Link>
      </div>
    </div>
  );
};

export default Home;