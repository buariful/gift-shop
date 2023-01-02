import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGiftAction } from "../actions/orderActions";

const ItemCard = ({ item }) => {
  const { name, img, price } = item;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const selectItemHandler = (param) => {
    console.log(state.selectedGifts);
  };
  return (
    <div className="bg-red-100 p-5 rounded-md mb-5">
      <img src={img} alt={name} className="mx-auto rounded-md" />
      <div className="flex justify-between my-3 font-semibold">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="flex justify-center">
        <button
          className="py-1 px-4 rounded-md text-red-50 font-semibold bg-red-500 hover:bg-[#201a1a]"
          onClick={() => selectItemHandler(item)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
