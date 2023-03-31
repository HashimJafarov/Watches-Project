import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperInsta from "../components/SwiperInsta";
function Register() {
  const [yes, setYes] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };
  console.log(registerInfo);
  const btndis =
    registerInfo.name < 5 ||
    registerInfo.surname < 5 ||
    registerInfo.email < 5 ||
    registerInfo.password < 5;
  const setData = () => {
    if (btndis) {
      setYes(true);
      return;
    }
    setRegisterInfo({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
    setYes(false);
  };
  return (
    <>
      <section className="registration">
        <div className="container">
          <div className="registration_wrapper">
            <div className="registration_form">
              <p>Akkaunt Yaradın</p>
              <div className="registration_name">
                <input
                  type="text"
                  placeholder="Ad"
                  name="name"
                  value={registerInfo.name}
                  onChange={handleChange}
                />
              </div>
              {yes && <p>Ad ən azı 5 hərfdən ibarət olmalıdı</p>}
              <div className="registration_surname">
                <input
                  type="text"
                  placeholder="Soyad"
                  name="surname"
                  value={registerInfo.surname}
                  onChange={handleChange}
                />
              </div>
              {yes && <p>Soyad ən azı 5 hərfdən ibarət olmalıdı</p>}
              <div className="registration_email">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={registerInfo.email}
                  onChange={handleChange}
                />
              </div>
              {yes && <p> Email doğru olmalıdı</p>}
              <div className="registration_password">
                <input
                  type="password"
                  placeholder="Şifrə"
                  name="password"
                  value={registerInfo.password}
                  onChange={handleChange}
                />
              </div>
              {yes && <p>Şifrə ən azı 5 simvoldan ibarət olmalıdı</p>}
              <button onClick={setData}>Təsdiq et</button>
              <Link to="/login">
                <button>Geri</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SwiperInsta />
    </>
  );
}

export default Register;
