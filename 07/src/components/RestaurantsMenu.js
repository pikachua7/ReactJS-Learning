import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const RestaurantsMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=84989&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await data.json();

    setRestaurantDetails(jsonData?.data);
  };

  if (!restaurantDetails) return <Shimmer />;

  const { name, id, city, avgRating, costForTwoMessage, cuisines } =
    restaurantDetails?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  console.log(itemCards);

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
