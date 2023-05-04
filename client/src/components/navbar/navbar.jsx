import { Link } from 'react-router-dom'
import SwitchUser from './switchUser';
import "./navbar.css";

const NavBar = ({check, handlingChange = f => f}) => {
  return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={require(`../../images/logo.png`)} id="logo" alt="logo" width="60px" height="60px"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/products/sedan">Sedan</Link>
              <Link className="dropdown-item" to="/products/suv">SUV</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <SwitchUser
          checked = {check}
          handleChange = {handlingChange}
        />
      </div>
    </div>
  </nav>);
}

export default NavBar;