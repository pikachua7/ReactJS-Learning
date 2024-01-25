import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({
  category,
  showItem,
  setShowIndex,
  index,
}) => {
  const handleClick = () => {
    showItem ? setShowIndex(null) : setShowIndex(index);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {category.title} ({category.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordian Body */}
        {showItem && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};
