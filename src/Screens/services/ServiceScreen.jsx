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
              <h4>Web Development</h4>
              <p>
                We design and develop high-quality websites that meet your
                specific needs and goals.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-chart-line"></i>
              <h4>Data Analysis</h4>
              <p>
                We help you make sense of your data with our advanced analytics
                tools and expertise.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-lightbulb"></i>
              <h4>Marketing Solutions</h4>
              <p>
                We create effective marketing campaigns that reach your target
                audience and drive results.
              </p>
            </div>
            <div class="service-card">
              <i class="fas fa-lock"></i>
              <p>
                We provide secure and reliable IT solutions to keep your
                business running smoothly.
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
