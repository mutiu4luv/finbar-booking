import React from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/Navbar";

const ContactScreen = () => {
  return (
    <div className="contacts-containers">
      {/* <NavBar /> */}
      <h1>Contact Us</h1>
      <div className="contact-info">
        <a
          href="https://wa.me/message/DSSUSJAZYBAMB1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>

        <a
          href="https://www.instagram.com/finbarregwuagu?igsh=MTYxNDA0cGtvN3p6bA=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="https://www.tiktok.com/@finbarr.egwuagu?_t=8nSs8Hasu7U&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <i className="fab fa-tiktok"></i> TikTok
        </a>
        <a href="mailto:finbarregwuagu@gmail.com" className="contact-item">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>

      {/* <img src="/public/finbar1.jpg" alt="uy" /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactScreen;
