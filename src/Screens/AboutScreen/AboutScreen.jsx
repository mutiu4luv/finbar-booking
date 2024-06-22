import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1 className="about-header">about us</h1>
      </div>
      <div className="about-content">
        <div> We exist to Know Jesus and Make Him Known.</div> <br />{" "}
        <div>
          {" "}
          Harvest Church is a dynamic community of faith in regional Victoria.
          This church has a rich heritage of bible-based teaching, powerful and
          engaging worship and community connection.
        </div>{" "}
        <br />
        <div>
          Senior Pastors Andrew & Rachel Cartledge are focused on helping people
          to find a home in the church regardless of their background and
          encouraging them to reach their God-given destiny.{" "}
        </div>
        <br />{" "}
        <div>
          You belong here, whether you have never been in church before, or have
          spent your whole life in faith. There is a place for everyone. Young,
          old, single, married, there is a place for you at our Church.{" "}
        </div>{" "}
        <br />
        We have a saying at Harvest, “Come as you are.” And we mean it. Life is
        messy and so are humans. You don’t need to have it all together to be a
        part of this great community. You just need to come.
      </div>
      <div>MEET OUR TEAM</div>
    </div>
  );
};

export default AboutScreen;
