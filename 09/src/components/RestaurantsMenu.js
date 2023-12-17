import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantsMenu = () => {
  const { resId } = useParams();

  const restaurantDetails = useRestaurantMenu(resId);

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
