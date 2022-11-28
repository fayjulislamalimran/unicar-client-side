import React from "react";

const CatagoryItemsCard = ({ news }) => {
  const { name, uses, price, location, image_url, details, title, author } = news;
  return (
    <div className="card lg:card-side bg-gray shadow-xl ">
      <div className="card-body ">
        <figure className=" w-1/2 h-1/2  justify-center">
          <img src={image_url} alt="Album" />
        </figure>
        <p className="card-title font-bold text-2xl">{name}</p>
        <p className="text-lg">Details: {details}</p>
        <p className="text-lg">Location: {location}</p>
        <p className="text-lg">Uses Time: {uses}Years</p>
        <p className="text-lg">Buying Price: {price.orginal}</p>
        <p className="text-lg">Selling Price: {price.resale}</p>
        <p className="text-lg">Description Of Mobile: {title}</p>
        <p className="text-lg">Sellar Information</p>
        <p className="text-lg">Name: {author.name}</p>
        <p className="text-lg">Phone: {author.number}</p>
        <p className="text-lg">Date: {author.published_date}</p>
        <label htmlFor="booking-modal" className="btn">
          Book Now
        </label>
      </div>
    </div>
  );
};

export default CatagoryItemsCard;
