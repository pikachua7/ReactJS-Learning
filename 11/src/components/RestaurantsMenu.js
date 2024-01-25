import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantsMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const restaurantDetails = useRestaurantMenu(resId);

  if (!restaurantDetails) return <Shimmer />;

  const { name, id, city, avgRating, costForTwoMessage, cuisines } =
    restaurantDetails?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantDetails?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    restaurantDetails?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {/* Categories- Accordians */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            category={category?.card?.card}
            showItem={showIndex === index ? true : false}
            setShowIndex={(index) => setShowIndex(index)}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
