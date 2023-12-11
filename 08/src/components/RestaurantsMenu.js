import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";

export const RestaurantsMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setRestaurantDetails(jsonData?.data);
  };

  if (!restaurantDetails) return <Shimmer />;

  const { name, id, city, avgRating, costForTwoMessage, cuisines } =
    restaurantDetails?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h4>{city}</h4>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRating}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price / 100} rs
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
