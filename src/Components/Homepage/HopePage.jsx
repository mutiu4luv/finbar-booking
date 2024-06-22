import React from "react";
import "./HomePage.css";
import Hero from "../../Pages/HeroPage/HeroPage";
import First from "../../Pages/HeroPage/First/First";
import Second from "../../Pages/HeroPage/Second/Second";
import Third from "../../Pages/HeroPage/Third/Third";
import Cards from "../Cards/Cards";
import Fourth from "../../Pages/Fourth/Fourth";
import Footer from "../Footer/Footer";

const HopePage = () => {
  const cardData = [
    {
      title: "CONNECT GROUPS",
      description:
        "We are all about connection, building meaningful relationships, and growing together in our relationships with God. We would love to help you find a group that is right for you.",
      imageUrl: "second.jpg",
      button: "Find out more >",
    },
    {
      title: "HARVEST KIDS",
      description:
        "We're a church dedicated to making life better for kids and their parents. We offer a wide range of programs to teach, encourage and support spiritual growth of families.",
      imageUrl: "church.jpeg",
      button: "Learn more >",
    },
    {
      title: "EMPIRE YOUTH",
      description:
        "Empire Youth is the youth ministry of Harvest Church, meeting each Friday night of the school term at 7PM.",
      imageUrl: "backgroundChurch.jpg",
      button: "Join us >",
    },
    {
      title: "HARVEST WOMEN",
      description:
        "Harvest Women is a welcoming and encouraging community within our church, with a number of great events running each week.",
      imageUrl: "backgroundChurch.jpg",
      button: "Join us >",
    },
    {
      title: "YOUNG ADULTS",
      description:
        "HYA is the Young Adults ministry of Harvest Church, with the vision is to create a vibrant and welcoming community of young adults within the Wimmera.",
      imageUrl: "second.jpg",
      button: "Join us >",
    },
    {
      title: "HARVEST PLAYGROUP",
      description:
        "A welcoming community for families across the Wimmera, running each week on a Thursday morning.",
      imageUrl: "church.jpeg",
      button: "Join us >",
    },
  ];

  return (
    <div>
      <Hero />
      <First />
      <Second />
      <Third />
      <div className="find">FIND WHERE YOU BELONG</div>

      <div className="cards">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            button={card.button}
          />
        ))}
      </div>
      <Fourth />
      <Footer />
    </div>
  );
};

export default HopePage;
