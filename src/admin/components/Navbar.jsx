import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function Navbar({ dispatch, user }) {
  const nav = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };
  const logout = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/control/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((a) => a.json())
      .then(() => {
        nav("/control/login");
        window.localStorage.removeItem("token");
      });
  };
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
        <a className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item lh-1 me-3">
            <span></span>
          </li>
          <li
            onClick={toggleDropdown}
            className="nav-item navbar-dropdown dropdown-user dropdown"
          >
            <a
              className={`nav-link dropdown-toggle hide-arrow ${
                dropdown ? "show" : ""
              }`}
              href="#"
            >
              <div className="avatar avatar-online">
                <img
                  src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/avatars/1.png"
                  alt=""
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul
              onClick={(e) => e.stopPropagation()}
              className={`dropdown-menu dropdown-menu-end ${
                dropdown ? "show" : ""
              }`}
              style={{ right: 0, left: "auto" }}
            >
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/avatars/1.png"
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">{user?.name}</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li onClick={logout}>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Çıxış</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const t = (a) => {
  return {
    user: a.admin,
  };
};
export default connect(t)(Navbar);
