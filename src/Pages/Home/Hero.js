import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2 pt-20 pb-20">
      <div className="flex flex-col items-start justify-center container md:py-24 py-14">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">Sell/buy your used car?</h1>
        <form className="w-full mb-6">
          <label className="sr-only">Your Email</label>
        </form>
        <p className="pr-0 mb-4 text-sm text-slate-800 tracking-relaxed lg:pr-16">There are some used car. You can buy or booked for now. You Can Click on available Car category. Hurry Up Booked First</p>
      </div>
      <div className="flex items-center">
        <img src="/images/hero.png" alt="car" className="object-fit w-full " loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
