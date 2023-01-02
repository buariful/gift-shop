import React from "react";

const CalculateRow = ({ item }) => {
  const { img, price, name } = item;
  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-4 shadow-md">
        <img src={img} alt={name} className="w-16" />
        <p>{name}</p>
        <p className="font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default CalculateRow;
