import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ClientLogoMarquee from "../ClientLogosMarquee/ClientLogosMarquee";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogoMarquee></ClientLogoMarquee>
    </div>
  );
};

export default Home;
