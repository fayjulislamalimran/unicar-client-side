import React from "react";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Resale Mobile Phone !</h1>
          <p className="py-6">Find second-hand mobile phones for sale near you at the best price. Explore the wide range of used mobile phones from top brands.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
