import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
function Aside({ admin }) {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [logout, setLogout] = useState(false);
  const handleLogout = () => {
    // const id = admin.id;
    window.localStorage.removeItem("token");
    nav("/control/login");
    // fetch(`http://127.0.0.1:8000/api/control/logout/${id}`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="#" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Admin <br /> Template
          </span>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <div style={{ position: "relative", marginTop: "10px" }}>
        <i
          className="fa-solid fa-right-from-bracket ms-5"
          style={{ color: "black" }}
          onClick={() => setLogout(!logout)}
        ></i>
        {logout ? (
          <div
            style={{
              width: "150px",
              height: "35px",
              borderRadius: "7px",
              backgroundColor: "#696CFF",
              padding: "5px",
              position: "absolute",
              top: "100%",
              left: "25%",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "7px",
                backgroundColor: "transparent",
                color: "white",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
      <ul className="menu-inner py-1 mt-3">
        <li
          className={`menu-item ${
            pathname.includes("/control/watches") ? "active" : ""
          }`}
        >
          <Link to="/control/watches" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Watches</div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            pathname.includes("/control/category") ? "active" : ""
          }`}
        >
          <Link to="/control/category" className="menu-link">
            {/* <i className="menu-icon tf-icons bx bx-home-circle"></i> */}
            <i className="fa-solid fa-puzzle-piece"></i>
            <div data-i18n="Analytics" className="ms-2">
              Category
            </div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            pathname.includes("/control/company") ? "active" : ""
          }`}
        >
          <Link to="/control/company" className="menu-link">
            {/* <i className="menu-icon tf-icons bx bx-home-circle"></i> */}
            <i className="fa-solid fa-building"></i>
            <div data-i18n="Analytics" className="ms-2">
              Company
            </div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            pathname.includes("/control/movement") ? "active" : ""
          }`}
        >
          <Link to="/control/movement" className="menu-link">
            {/* <i className="menu-icon tf-icons bx bx-home-circle"></i> */}
            <i className="fa-regular fa-clock"></i>
            <div data-i18n="Analytics" className="ms-2">
              Movement
            </div>
          </Link>
        </li>
        <li
          className={`menu-item ${
            pathname.includes("/control/functionality") ? "active" : ""
          }`}
        >
          <Link to="/control/functionality" className="menu-link">
            {/* <i className="menu-icon tf-icons bx bx-home-circle"></i> */}
            <i className="fa-solid fa-table-cells-large"></i>
            <div data-i18n="Analytics" className="ms-2">
              Functionality
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
const t = (a) => {
  return {
    admin: a.admin,
  };
};
export default connect(t)(Aside);
