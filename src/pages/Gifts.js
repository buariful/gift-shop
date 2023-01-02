import React from "react";
import giftItems from "../database/gift.json";
import SectionTitle from "../components/SectionTitle";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="my-6">
        <SectionTitle text="Pick your favourite gifts and click the button below"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto">
        {giftItems.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/wrappers"
          className="bg-gradient-to-r from-[#b10f10] to-[#8d0404] hover:from-[#201a1a] hover:to-[#201a1a] text-white font-semibold px-4 py-3 rounded-lg mb-6"
        >
          Wrappers
        </Link>
      </div>
    </div>
  );
};

export default Items;
