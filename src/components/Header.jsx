import React from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { connect } from "react-redux";
function Header({ basket, favorite, company, category, setAsidebasket }) {
  return (
    <section
      className="header"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container">
        <header>
          <NavLink to="/" className="logo">
            <img src="/logo/WatchesMoonLast.png" alt="" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/">Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li>
              Mağaza
              <div className="dropdown">
                <ul>
                  <li>Məhsullar</li>
                  {category.map((a) => (
                    <li key={a.id}>
                      <NavLink to={`/${a.name.toLowerCase()}/${a.id}`}>
                        {a.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <ul>
                  <li>Brendlər</li>
                  {company.map((a) => (
                    <li key={a.id}>
                      <NavLink to={`${a.id}`}>{a.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
          </ul>
          <div className="favorites">
            <div className="user">
              <button>
                <i className="fa-regular fa-user"></i>
              </button>
            </div>
            <div className="heart">
              <button>
                <Link to="/favorites">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </button>
              {favorite.length ? (
                <div className="heart_count">{favorite.length}</div>
              ) : null}
            </div>
            <div className="basket">
              <button onClick={() => setAsidebasket(true)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              {basket.length ? (
                <div className="basket_count">{basket.length}</div>
              ) : null}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Header);
