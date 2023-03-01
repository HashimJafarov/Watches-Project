import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function NavMenu({
  setNavMenu,
  favorite,
  basket,
  category,
  company,
  movement,
  functionality,
}) {
  const [categoryNav, setCategoryNav] = useState(false);
  const [companyNav, setCompanyNav] = useState(false);
  const [movementNav, setMovementNav] = useState(false);
  const [funcNav, setFuncNav] = useState(false);
  const cat = () => {
    setCategoryNav(!categoryNav);
    setCompanyNav(false);
    setMovementNav(false);
    setFuncNav(false);
  };
  const comp = () => {
    setCompanyNav(!companyNav);
    setCategoryNav(false);
    setMovementNav(false);
    setFuncNav(false);
  };
  const move = () => {
    setMovementNav(!movementNav);
    setCompanyNav(false);
    setCategoryNav(false);
    setFuncNav(false);
  };
  const func = () => {
    setFuncNav(!funcNav);
    setMovementNav(false);
    setCompanyNav(false);
    setCategoryNav(false);
  };
  return (
    <aside
      className="navmenu"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="300"
    >
      <button onClick={() => setNavMenu(false)}>X</button>
      <div className="favorites">
        <div className="user">
          <button onClick={() => setNavMenu(false)}>
            <i className="fa-regular fa-user"></i>
          </button>
        </div>
        <div className="heart">
          <button onClick={() => setNavMenu(false)}>
            <Link to="/favorites">
              <i className="fa-regular fa-heart"></i>
            </Link>
          </button>
          {favorite.length ? (
            <div className="heart_count">{favorite.length}</div>
          ) : null}
        </div>
        <div className="basket">
          <button onClick={() => setNavMenu(false)}>
            <Link to="/card">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </button>
          {basket.length ? (
            <div className="basket_count">{basket.length}</div>
          ) : null}
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/" onClick={() => setNavMenu(false)}>
            Ana Səhifə
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setNavMenu(false)}>
            Haqqımızda
          </NavLink>
        </li>
        <li onClick={cat}>
          Məhsullar
          {categoryNav && (
            <ul
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="300"
              className="nav_category"
            >
              {category.map((a) => (
                <NavLink
                  key={a.id}
                  to={`/${a.name.toLowerCase()}/${a.id}`}
                  onClick={() => setNavMenu(false)}
                >
                  <li>{a.title}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </li>
        <li onClick={comp}>
          Brendlər
          {companyNav && (
            <ul
              className="nav_company"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              {company.map((a) => (
                <NavLink
                  key={a.id}
                  to={`/products/${a.title.toLowerCase()}/${a.id}`}
                  onClick={() => setNavMenu(false)}
                >
                  <li>{a.name}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </li>
        <li onClick={move}>
          Mexanizm
          {movementNav && (
            <ul
              className="nav_movement"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              {movement.map((a) => (
                <NavLink
                  key={a.id}
                  to={`/movement/${a.name.toLowerCase()}/${a.id}`}
                  onClick={() => setNavMenu(false)}
                >
                  <li>{a.title}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </li>
        <li onClick={func}>
          Funksionallıq
          {funcNav && (
            <ul
              className="nav_func"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              {functionality.map((a) => (
                <NavLink
                  key={a.id}
                  to={`/functionality/${a.name.toLowerCase()}/${a.id}`}
                  onClick={() => setNavMenu(false)}
                >
                  <li>{a.title}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/blog" onClick={() => setNavMenu(false)}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setNavMenu(false)}>
            Əlaqə
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
const t = (a) => a;
export default connect(t)(NavMenu);
