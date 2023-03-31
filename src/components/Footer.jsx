import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
function Footer({ customers, functionality, movement, category }) {
  const updatePage = (id) => {
    useEffect(() => {
      fetch(`http://localhost:1225/customers/${id}`)
        .then((a) => a.json())
        .then((a) => {
          setBlogDetail(a);
          setLoading(false);
        });
    }, []);
    // const [yes, setYes] = useState(false);
    // const [inputValue, setInputValue] = useState("");
    // const handleEmail = (e) => {
    //   setInputValue(e.target.value);
    // };
    // console.log(inputValue);
    // const btnable = inputValue.email.length < 5;
    // const setData = () => {
    //   if (btnable) {
    //     setYes(true);
    //     return;
    //   }
    //   setInputValue("");
    //   setYes(true);
    // };
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <p>Müştərilər</p>
            <ul>
              <li>
                <NavLink to="/contact">Əlaqə</NavLink>
              </li>
              {customers.map((customer) => {
                return (
                  <li key={customer.id}>
                    <NavLink
                      onClick={() => updatePage(customer.id)}
                      to={`/customers/${customer.title}/${customer.id}`}
                    >
                      {customer.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_box">
            <p>Watches.Store</p>
            <ul>
              <li>
                <NavLink to="/">Ana səhifə</NavLink>
              </li>
              <li>
                <NavLink to="/about">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/favorites">Sevimlilər</NavLink>
              </li>
              <li>
                <NavLink to="/card">Səbət</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <p>Kategoriyalar</p>
            <ul>
              {category.map((a) => (
                <li key={a.id}>
                  <NavLink to={`/${a.name.toLowerCase()}/${a.id}`}>
                    {a.title}
                  </NavLink>
                </li>
              ))}
              {movement.map((a) => (
                <li key={a.id}>
                  <NavLink to={`/movement/${a.name.toLowerCase()}/${a.id}`}>
                    {a.title}
                  </NavLink>
                </li>
              ))}
              {functionality.map((a) => (
                <li key={a.id}>
                  <NavLink
                    to={`/functionality/${a.name.toLowerCase()}/${a.id}`}
                  >
                    {a.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_box">
            <p>Qeydiyyatdan keçin və ilk alışa 10% endirim qazanın</p>
            <input
              type="text"
              placeholder="Email..."
              name="email"
              // value={inputValue.email}
              // onChange={handleEmail}
            />
            <button
            // onClick={setData}
            >
              Təsdiq et
            </button>
            <div className="footer_social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const t = (a) => a;
export default connect(t)(Footer);
