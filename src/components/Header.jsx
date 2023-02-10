import React from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { connect } from "react-redux";
function Header({ basket, company, category, setAsidebasket, dispatch }) {
  return (
    <section
      className="header"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container">
        <header>
          <div className="logo">
            <img src="/logo/WatchesMoonLast.png" alt="" />
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              Shop
              <div className="dropdown">
                <ul>
                  <li>All Products</li>
                  {category.map((a) => (
                    <li key={a.id}>
                      <NavLink to={`/${a.name.toLowerCase()}/${a.id}`}>
                        {a.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <ul>
                  <li>Companies</li>
                  {/* {company.map((comp) => {
                    const check = category.find(
                      (cat) => cat.id === comp.category_id
                    );
                    return check ? (
                      <li key={comp.id}>
                        <NavLink>{comp.name}</NavLink>
                      </li>
                    ) : null;
                  })} */}
                  {company.map((a) => (
                    <li key={a.id}>
                      <NavLink to={`${a.id}`}>{a.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <NavLink>Blog</NavLink>
            </li>
            <li>
              <NavLink>Contacts</NavLink>
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
                <i className="fa-regular fa-heart"></i>
              </button>
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
