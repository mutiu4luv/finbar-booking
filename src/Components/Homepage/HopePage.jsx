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
      title: "NWOKEDI BENEDICTA",
      description:
        "Every occasion is memorable to the guests if good music is performed.Thinking of how to make this possible? Finbarr has a unique way of leaving your guests with a lasting experience.I've witnessed him play the saxophone and keyboard with a finely tuned touch at various events, and all I can say is that everyone left with a bold smile.Don’t plan your next event without adding him to your list. His talent brings an unforgettable atmosphere, turning ordinary gatherings into extraordinary celebrations.",
      imageUrl: "benedicta.jpg",
      // button: "Find out more >",
    },
    {
      title: "JOHN BOSS MUSIC",
      description:
        "Finbarrsax musical is a trusted Brand in Inspiring and scintillating music performance. I have had a firsthand experience of his Services/Performance,he has shown mastery and class in music performance",
      imageUrl: "john.jpg",
      // button: "Learn more >",
    },
    {
      title: "ANOINTING PRAISE",
      description:
        "It was on a Sunday morning and I was in church as usual and during the responsorial psalms Finbar took the microphone and took us to heaven his voice was so powerful yet smooth. When ever he plays the saxophone I hear the angles sing along and when he is on the keyboard the church is always blessed. Thank you so much sir for letting God use you and your instrument for his Glory.",
      imageUrl: "praise.jpg",
      // button: "Join us >",
    },
    {
      title: "EMERENINI BRENDA",
      description:
        "There are so many Noise in places of worship today in the name of Music. Encountering Finbarr and his music school will help you know what it means when they say Music is an organised noise and it's pleasing to the soul... I am a testimony of his spirit-filled music.",
      imageUrl: "Brendan.jpg",
      // button: "Join us >",
    },
    {
      title: "ELIJAH CHUKWUMA",
      description:
        "Helloo friends... it's been decades working with FinbarSax and he has shown to be reliable Musically, contact him for your events for a classic performance. He is grounded in all aspects of music once his on that Sax he gives his best.So guys he is open for any kinds of occasions, contact him.FinbarrSax.",
      imageUrl: "chukwuma.jpg",
      // button: "Join us >",
    },
    {
      title: " EZIRIM KINGSLEY",
      description:
        "Finbarr sax as popularly know,is a lover of music,to the extent that he learnt how to play virtually all the music instruments,his stage performance is one of the best so far....his voice inspires and heals alot of broken hearts,trust finbarr for anything music",
      imageUrl: "kingsley.jpg",
      // button: "Join us >",
    },
  ];

  return (
    <div>
      <Hero />
      <First />
      <Second />
      <Third />
      <div className="find">TESTIMONIES</div>

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
