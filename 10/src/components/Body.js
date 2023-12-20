// Restaurant Card
import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useRestaurantList } from "../utils/useRestaurantList";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();
  const onlineStatus = useOnlineStatus();

  return onlineStatus ? (
    listOfRestaurants.length > 0 ? (
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
                const filteredRestaurantsList = listOfRestaurants.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
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
    )
  ) : (
    <h1>Looks like you are offline</h1>
  );
};
