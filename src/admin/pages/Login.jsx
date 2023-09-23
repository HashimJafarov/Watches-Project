import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/css/page-auth.css";
import "../assets/css/boxicons.css";
import "../assets/css/core.css";
import "../assets/css/theme-default.css";
import "../assets/css/demo.css";
import "../assets/css/perfect-scrollbar.css";
function Login({ dispatch }) {
  let token = window.localStorage.getItem("token");
  const nav = useNavigate();
  useEffect(() => {
    if (token) {
      nav("/control");
    }
    let html = document.querySelector("html");
    html.classList.add("light-style");
    return () => {
      html.classList.remove("light-style");
    };
  }, []);
  const [user, setUser] = useState({
    email: "h.jafarov@gmail.com",
    password: "123456789",
  });
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/control/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((a) => {
        if (a.access_token) {
          dispatch({
            type: "SET_ADMIN",
            payload: a.admin,
          });
          window.localStorage.setItem("token", a.access_token);
          nav("/control/watches");
        }
      });
  };
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-body fw-bolder">
                    Admin Dashboard
                  </span>
                </a>
              </div>
              <form onSubmit={login} id="formAuthentication" className="mb-3">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    value={user.email}
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleInput}
                    placeholder="Email"
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      value={user.password}
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      onChange={handleInput}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Daxil ol
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect()(Login);
