import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>Watch.Store</h2>
            <div className="footer_descr">
              <div className="footer_social">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="footer_social">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="footer_social">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="footer_watches">
            <ul>
              <li>Watches</li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="">Shop</NavLink>
              </li>
              <li>
                <NavLink to="">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_support">
            <ul>
              <li>Support</li>
              <li>
                <NavLink to="">Contact US</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
