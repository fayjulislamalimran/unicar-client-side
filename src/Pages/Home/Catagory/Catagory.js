import React, { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";

const Catagory = () => {
  const [catagorys, setCatagorys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagorys")
      .then((res) => res.json())
      .then((data) => setCatagorys(data));
  }, []);
  return (
    <div>
      <h1 class="text-3xl font-bold text-center mt-10 underline underline-offset-8">Three Categories Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {catagorys.map((catagory) => (
          <CatagoryCard key={catagory.id} catagory={catagory}></CatagoryCard>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
