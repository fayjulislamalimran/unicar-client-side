import React from "react";
import { useLoaderData } from "react-router-dom";

import CatagoryItemsCard from "./CatagoryItemsCard";

const CatagoryItems = () => {
  const newsData = useLoaderData();
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-20">
        {newsData.map((news) => (
          <CatagoryItemsCard key={news._id} news={news}></CatagoryItemsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryItems;
