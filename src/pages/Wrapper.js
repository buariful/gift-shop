import React from "react";
import { Link } from "react-router-dom";
import OrderSteps from "../components/OrderSteps";
import SectionTitle from "../components/SectionTitle";
import WrapperCard from "../components/WrapperCard";
import wrapperItems from "../database/wrapper.json";

const Wrapper = () => {
  return (
    <div className="w-10/12 mx-auto my-5">
      <OrderSteps activeStep={1}></OrderSteps>
      <div className="my-6">
        <SectionTitle text="Pick your favourite wrapper and click the button below"></SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto">
        {wrapperItems.map((item) => (
          <WrapperCard key={item.id} item={item}></WrapperCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/totalprice"
          className="bg-gradient-to-r from-[#b10f10] to-[#8d0404] hover:from-[#201a1a] hover:to-[#201a1a] text-white font-semibold px-4 py-3 rounded-lg mb-6"
        >
          Calculate
        </Link>
      </div>
    </div>
  );
};
// totalprice

export default Wrapper;
