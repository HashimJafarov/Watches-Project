import React from "react";
import Contactbg from "../components/Contactbg";
import { useState } from "react";
import SwiperInsta from "../components/SwiperInsta";
function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    surname: "",
    email: "",
    text: "",
  });
  const [yes, setYes] = useState(false);
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  const btnDisabled =
    contactInfo.name.length < 4 ||
    contactInfo.surname.length < 4 ||
    contactInfo.email.length < 4 ||
    contactInfo.text.length < 20;
  const sendData = () => {
    if (btnDisabled) {
      setYes(true);
      return;
    }
    setContactInfo({ name: "", surname: "", email: "", text: "" });
    setYes(false);
  };

  return (
    <>
      <Contactbg />
      <section className="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_form">
              <p>Contact Us</p>
              <div className="contact_user">
                <div className="contact_alarm">
                  <div className="contact_name">
                    <input
                      type="text"
                      placeholder="Ad"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleChange}
                    />
                  </div>
                  {yes && <p>Ad ən azı 4 herfden ibarət olmalıdı</p>}
                </div>
                <div className="contact_alarm">
                  <div className="contact_surname">
                    <input
                      type="text"
                      placeholder="Soyad"
                      value={contactInfo.surname}
                      name="surname"
                      onChange={handleChange}
                    />
                  </div>
                  {yes && <p>Soyad ən azı 4 herfden ibarət olmalıdı</p>}
                </div>
              </div>
              <div className="contact_alarm">
                <div className="contact_email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                  />
                </div>
                {yes && <p>Email doğru olmalıdı</p>}
              </div>
              <div className="contact_alarm">
                <div className="contact_textarea">
                  <textarea
                    name="text"
                    value={contactInfo.text}
                    onChange={handleChange}
                    placeholder="Mətn daxil edin..."
                  ></textarea>
                </div>
                {yes && <p>Mətn ən azı 20 herfden ibarət olmalıdı</p>}
              </div>
              <div className="contact_btn">
                <button onClick={sendData}>Submit</button>
              </div>
            </div>
            <div className="contact_address">
              <p>
                <span>Ünvan:</span> 13781 Roswell Ave, Unit B, Chino, CA 91710
              </p>
              <p>
                <span>Əlagə nömrəsi:</span> 1 (833) GE-Slaps or 1(833)437-5277
              </p>
              <p>
                <span>Email:</span> Grace@satinlinedcaps.com
              </p>
              <p>
                <span>İş saatı:</span> 24 saat, həftə içi hər gün (Bayramlar
                daxil olmaqla)
              </p>
              <div className="contact_share">
                <span>Bizi izləyin:</span>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="contact_iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12156.702633509221!2d49.8240488!3d40.3827993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2saz!4v1676980592541!5m2!1sru!2saz"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <SwiperInsta />
    </>
  );
}

export default Contact;
