import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalculateRow from "../components/CalculateRow.js";
import OrderSteps from "../components/OrderSteps.js";
import SectionTitle from "../components/SectionTitle.js";

const TotalPrice = () => {
  const { selectedGifts, selectedWrapper } = useSelector((state) => state);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = selectedWrapper.price;
    for (let index = 0; index < selectedGifts.length; index++) {
      totalPrice = totalPrice + selectedGifts[index].price;
    }
    setTotalPrice(totalPrice);
  }, [selectedGifts, selectedWrapper.price]);

  return (
    <div className="my-5">
      <OrderSteps activeStep={2}></OrderSteps>
      <SectionTitle text="Calculate your total price"></SectionTitle>

      <div className="bg-red-100 w-10/12 md:w-2/3 lg:1/2 mx-auto my-8 shadow-lg p-8">
        {selectedGifts.map((item) => (
          <CalculateRow item={item} key={item.id}></CalculateRow>
        ))}
        <CalculateRow item={selectedWrapper}></CalculateRow>

        <div className="font-semibold flex justify-end mt-4 gap-6 text-xl">
          <h2>Total price</h2>
          <h2>${totalPrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
