// Restaurant Card
import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  //useState
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Inside Component");

  //useEffect
  useEffect(() => {
    console.log("Inside Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Inside Function");
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataToJson = await data.json();
    // optional chaining
    setListOfRestaurants(
      dataToJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      dataToJson?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering

  return listOfRestaurants.length > 0 ? (
    <>
      <div className="body">
        {/* Search */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurantsList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurantsList);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Top Restaurants */}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  ) : (
    <Shimmer />
  );
};
