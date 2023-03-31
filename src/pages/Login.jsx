import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperInsta from "../components/SwiperInsta";
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: "",
  });
  const [yes, setYes] = useState(false);
  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const btnDis = loginInfo.name < 5 || loginInfo.password < 5;
  const sendData = () => {
    if (btnDis) {
      setYes(true);
      return;
    }
    setLoginInfo({
      login: "",
      password: "",
    });
    setYes(false);
  };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login_wrapper">
            <div className="login_user">
              <p className="title">Daxil ol</p>
              <p className="descr">
                Əğər bizim saytda şəxsi kabinetiniz varsa, daxil olun
              </p>
              <div className="login_user_name">
                <input
                  type="text"
                  placeholder="Login"
                  name="login"
                  value={loginInfo.login}
                  onChange={handleChange}
                />
              </div>
              {yes ? (
                <p className="alarm">Login ən azi 5 herfden ibarət olmalıdı</p>
              ) : null}
              <div className="login_user_password">
                <input
                  type="password"
                  placeholder="Şifrə"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleChange}
                />
              </div>
              {yes ? (
                <p className="alarm">
                  Şifrə ən azi 5 simvoldan ibarət olmalıdı
                </p>
              ) : null}
              <button onClick={sendData}>Daxil ol</button>
            </div>
            <div className="register_user">
              <p>Yeni müştərisiz?</p>
              <p>
                Bu saytda qeydiyyatdan keçmək sizə sifarişinizin statusu və
                tarixçəsinə daxil olmaq imkanı verir. Tez sizin üçün yeni hesab
                yaradacağıq. Bunu etmək üçün sizdən yalnız satınalma prosesini
                daha sürətli və asanlaşdırmaq üçün lazım olan məlumat
                istəniləcək.
              </p>
              <button>
                <Link to="/register">Qeydiyyatdan keç </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <SwiperInsta />
    </>
  );
}

export default Login;
