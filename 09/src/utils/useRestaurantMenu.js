import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constant";

export const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setRestaurantDetails(jsonData?.data);
  };

  return restaurantDetails;
};
