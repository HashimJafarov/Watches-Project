import { Link, useLocation } from "react-router-dom";
function Aside() {
  const { pathname } = useLocation();
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Admin <br /> Template
          </span>
        </a>

        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1 mt-3">
        <li
          className={`menu-item ${
            pathname.includes("/control/watches") ? "active" : ""
          }`}
        >
          <Link to="/control/watches" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Saatlar</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
