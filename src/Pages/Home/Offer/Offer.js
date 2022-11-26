import React from "react";
import offer from "../../../assets/images/offer.png";

const Offer = () => {
  return (
    <div>
      <h2 className="text-center auto-cols-max font-mono text-3xl pt-20 pb-10">Get Exclusive Offers 40%</h2>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={offer} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 54 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
