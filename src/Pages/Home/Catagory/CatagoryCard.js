import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({ catagory }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-3xl">{catagory.name}</h2>
          <p>You can buy or booked for some used products?</p>
          <Link to={`/catagory/${catagory.id}`}>
            <button className="btn btn-gray justify-end">See Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
