import React from "react";
import "../services/ServicesScreen.css";
import Footer from "../../Components/Footer/Footer";

const ServiceScreen = () => {
  return (
    <div>
      <body>
        <header>
          <h1>Finbarrsax Musicals</h1>
        </header>
        <main>
          <section class="hero-two">
            <h2>We Offer a Wide Range of Services</h2>
            <p>
              Here at Finbarrsax Musicals, we beautiful your events, church
              programs, social and cultural gatherings, ceremonies, celebrations
              and church gatherings with wonderful saxophone renditions,
              keyboard accompaniments and harmonious choral displays.
            </p>

            <button id="explore-btns">
              <a href="https://www.tiktok.com/@finbarr.egwuagu?_t=8nSs8Hasu7U&_r=1">
                Explore Services
              </a>
            </button>
          </section>
          <section class="services">
            <h3 class="heading">Our Featured Services</h3>
            <div class="service-card">
              <i class="fas fa-rocket"></i>
              <h4>Singing at Events</h4>
              <p>
                We play the keyboard and sing at events such as funerals, giving
                you a sonorous selection of hymns well rendered.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-chart-line"></i>
              <h4>Saxophone renditions</h4>
              <p>
                We keep you entertained with the beautiful sound of the
                saxophone, delivering harmonious and soothing musics to suite
                your events and occasions.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-lightbulb"></i>
              <h4>Choir support</h4>
              <p>
                We support your choir with playing the keyboard or the saxophone
                to spice up your singing and choir renditions, and also
                presenting at church events.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-lock"></i>
              <p>
                We produce secure and reliable music to keep your heart lifted.
              </p>
            </div>
          </section>
        </main>
      </body>
      <Footer />
    </div>
  );
};

export default ServiceScreen;
