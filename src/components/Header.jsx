import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { connect } from "react-redux";
import styles from "./Header.module.css";
function Header({
  setNavMenu,
  navMenu,
  basket,
  favorite,
  company,
  category,
  movement,
  functionality,
  setAsidebasket,
  API_CATEGORY,
  API_COMPANY,
  API_MOVEMENT,
  API_FUNCTIONALITY,
  showPicture = { showPicture },
  dispatch,
}) {
  useEffect(() => {
    fetch(`${API_CATEGORY}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
      
        dispatch({
          type: "SET_CATEGORY",
          payload: data,
        });
      })
      .then(() => {
        fetch(`${API_COMPANY}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "SET_COMPANY",
              payload: data,
            });
          });
      })
      .then(() => {
        fetch(`${API_MOVEMENT}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "SET_MOVEMENT",
              payload: data,
            });
          });
      })
      .then(() => {
        fetch(`${API_FUNCTIONALITY}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "SET_FUNCTIONALITY",
              payload: data,
            });
          });
      });
  }, []);

  return (
    <section
      className={styles.header_section}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      style={showPicture ? { zIndex: "1" } : { zIndex: "3" }}
    >
      <div className="container">
        <header className={styles.header}>
          <NavLink to="/" className="logo">
            <img src="/logo/WatchesMoonLast.png" alt="" />
          </NavLink>
          <ul className={styles.ul}>
            <li>
              <NavLink to="/">Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li>
              Mağaza
              <div className={styles.dropdown}>
                <ul>
                  <li>
                    Kategoriya
                    <ul className={styles.dropdown_category}>
                      {category.map((a) => (
                        <NavLink
                          key={a.id}
                          to={`/${a.name.toLowerCase()}/${a.id}`}
                        >
                          <li>{a.name}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </li>
                  <li>
                    Brendlər
                    <ul className={styles.dropdown_company}>
                      {company.map((a) => (
                        <NavLink
                          key={a.id}
                          to={`/products/${a.name.toLowerCase()}/${a.id}`}
                        >
                          <li>{a.name}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </li>
                  <li>
                    Mexanizm
                    <ul className={styles.dropdown_movement}>
                      {movement.map((a) => (
                        <NavLink
                          key={a.id}
                          to={`/movement/${a.name.toLowerCase()}/${a.id}`}
                        >
                          <li>{a.name}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </li>
                  <li>
                    Funksionallıq
                    <ul className={styles.dropdown_func}>
                      {functionality.map((a) => (
                        <NavLink
                          key={a.id}
                          to={`/functionality/${a.name.toLowerCase()}/${a.id}`}
                        >
                          <li>{a.name}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <NavLink to="/allproducts">Bütün məhsullar</NavLink>
                  </li>

                  <ul className={styles.dropdown_img}>
                    <img
                      src="https://images.unsplash.com/photo-1526648856597-c2b6745ad7bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80"
                      alt=""
                    />
                  </ul>
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
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
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
          <div onClick={() => setNavMenu(!navMenu)} className={styles.bars}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Header);
