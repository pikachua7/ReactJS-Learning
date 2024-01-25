import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ category }) => {
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {category.title} ({category.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordian Body */}
        <ItemList items={category.itemCards} />
      </div>
    </div>
  );
};
