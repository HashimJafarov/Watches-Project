import "../admin/assets/css/boxicons.css";
import "../admin/assets/css/core.css";
import "../admin/assets/css/theme-default.css";
import "../admin/assets/css/demo.css";
import "../admin/assets/css/perfect-scrollbar.css";
import Aside from "../admin/components/Aside";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
function ControlLayout({ children, dispatch, admin }) {
  const token = window.localStorage.getItem("token");
  const nav = useNavigate();
  const loc = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserInfo = async () => {
      await fetch(`http://127.0.0.1:8000/api/control/admin`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.name) {
            dispatch({
              type: "SET_ADMIN",
              payload: json,
            });
          } else {
            window.localStorage.removeItem("token");
            dispatch({
              type: "SET_ADMIN",
              payload: null,
            });
            nav("/control/login");
          }
        });
    };
    getUserInfo().then(() => setLoading(false));
  }, [loc.pathname]);
  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.add("light-style");
    return () => {
      html.classList.remove("light-style");
    };
  }, []);
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {admin && <Aside />}
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {!loading && children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const t = (a) => {
  return {
    admin: a.admin,
  };
};
export default connect(t)(ControlLayout);
