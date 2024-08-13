import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartAmount, token, logoutUser, cartItems } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setMenu("home");
        break;
      case '/exploremenu':
        setMenu("menu");
        break;
      case '#app-download':
        setMenu("mob-app");
        break;
      case '#footer':
        setMenu("contact");
        break;
      default:
        setMenu("home");
        break;
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="Food Dash Logo" /></Link>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <Link to="/menu" onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</Link>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart Icon" />
          <div className={Object.keys(cartItems).length > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? 
          <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="Profile Icon" />
              <ul className='navbar-profile-dropdown'>
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt="Orders Icon" /> <p>Orders</p>
                </li>
                <hr />
                <li onClick={() => {
                  logoutUser();
                  navigate('/');
                }}>
                  <img src={assets.logout_icon} alt="Logout Icon" /> <p>Logout</p>
                </li> 
              </ul>
            </div>
        }
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
