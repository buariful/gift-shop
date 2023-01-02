import React from "react";
import giftItems from "../database/gift.json";
import SectionTitle from "../components/SectionTitle";
import ItemCard from "../components/ItemCard";

const Items = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="my-6">
        <SectionTitle text="Pick your favourite items and click the button below"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto">
        {giftItems.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Items;
