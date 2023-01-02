import React from "react";
import { useDispatch } from "react-redux";
import { wrapperAction } from "../actions/orderActions";

const WrapperCard = ({ item }) => {
  const { name, img, price } = item;
  const dispatch = useDispatch();

  //   ==================== Handle select wrapper ================
  const handleSelectWrapper = () => {
    dispatch(wrapperAction(item));
  };

  return (
    <div className={`p-5 rounded-md mb-5 bg-red-100`}>
      <img src={img} alt={name} className="mx-auto rounded-md w-40" />
      <div className="flex justify-between my-3 font-semibold">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>

      <div className="flex justify-center">
        <button
          className="py-1 px-4 rounded-md text-red-50 font-semibold bg-red-500 hover:bg-[#201a1a]"
          onClick={() => handleSelectWrapper()}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default WrapperCard;
