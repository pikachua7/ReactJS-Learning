import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constant";

export const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);

    const dataToJson = await data.json();

    setListOfRestaurants(
      dataToJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      dataToJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};
