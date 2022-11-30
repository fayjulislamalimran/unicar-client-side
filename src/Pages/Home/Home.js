import React from "react";
import useTitle from "../../hooks/useTitle";
import AboutUs from "./AboutUs";
import AdvertisedMent from "./AdvertisedMent";
import Category from "./Category";
import Featured from "./Featured";
import Hero from "./Hero";

const Home = () => {
  useTitle("Unicar");
  return (
    <section>
      <Hero />
      <AdvertisedMent />
      <Category />
      <AboutUs />
      <Featured />
    </section>
  );
};

export default Home;
