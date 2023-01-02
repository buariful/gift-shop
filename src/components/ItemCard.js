import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGiftAction } from "../actions/orderActions";

const ItemCard = ({ item }) => {
  const { name, img, price } = item;
  const dispatch = useDispatch();
  const { selectedGifts } = useSelector((state) => state);
  const [isSelected, setSelected] = useState(false);

  const giftExists = selectedGifts.find((gift) => gift.id === item.id);

  const selectItemHandler = () => {
    if (!giftExists) {
      const gifts = [...selectedGifts, item];
      dispatch(selectGiftAction(gifts));
      setSelected(true);
    } else {
      alert("You have already selected this item");
    }
  };
  return (
    <div
      className={`p-5 rounded-md mb-5 ${
        isSelected ? "bg-red-500" : "bg-red-100"
      }`}
    >
      <img src={img} alt={name} className="mx-auto rounded-md" />
      <div className="flex justify-between my-3 font-semibold">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
      <div className="flex justify-center">
        <button
          className="py-1 px-4 rounded-md text-red-50 font-semibold bg-red-500 hover:bg-[#201a1a]"
          onClick={() => selectItemHandler()}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
